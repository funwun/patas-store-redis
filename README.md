# Patas cache store for Redis

The Redis cache store engine for the [patas](
    https://github.com/funwun/patas) module.

## Installation
```bash
npm install patas-store-redis
```

## Usage Example
```javascript
// require modules
var Patas = require('patas').Patas,
    redisStore = require('patas-store-redis');

// create redis store
var store = redisStore({
    prefix: 'test-',
    ttl: 30000,  // default: 30 * 1000
    host: '192.168.28.155', // default
    port: 6379, //default
    minClients: 2, // defalut
    maxClients: 30, // defalut
    idleTimeoutMillis: 60000 * 60 * 24,
    database: 0 // database number to use
});

// create patas with source and stores
var patas = new Patas({
    source: ...,
    stores: [store]
});
```
Get detail from [patas](https://github.com/funwun/patas).

## Options
* `prefix` Cache key prefix.
* `ttl` Cache timeout after a given number of milliseconds `default ttl for patas.query()`.
* `host` Redis host.
* `port` Redis port.
* `minClients` Minimum size of redis pool.
* `maxClients` Maximum size of redis pool.
* `idleTimeoutMillis` Close idle clients after n second.
* `database` Database number of redis to use.

## License

The MIT License (MIT) Copyright (c) 2016 Lewis Deng &lt;kekuer@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
