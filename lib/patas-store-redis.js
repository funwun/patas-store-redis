module.exports = function(options) {
    var prefix = options.prefix || '';
    var Pool = require('generic-pool').Pool;
    var pool = new Pool({
        name: 'redis',
        create: function(callback) {
            var client = require('redis').createClient(options);

            client.on('connect', function() {
                callback(null, client);
            });
            client.on('error', function(err) {
                callback(err);
            });
        },
        destroy: function(client) {
            client.quit();
        },
        max: options['maxClients'],
        min: options['minClients'],
        idleTimeoutMillis: options['idleTimeoutMillis'],
        log: options['log']
    });

    return {
        name: 'redis',
        get: function(key, callback) {
            pool.acquire(function(err, client) {
                if (err) {
                    return callback(err);
                }
                client.get(prefix + key, function(err, value) {
                    pool.release(client);
                    callback(err, value);
                });
            });
        },
        set: function(key, ttl, value, callback) {
            callback = callback || function() {};
            pool.acquire(function(err, client) {
                if (err) {
                    return callback(err);
                }
                client.psetex(prefix + key, ttl, value, function(err) {
                    pool.release(client);
                    callback(err);
                });
            });
        }
    };
};
