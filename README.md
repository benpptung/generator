[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Express'](https://www.npmjs.com/package/express) application generator.
a fork from express-generator, and edit it because the followings:

```
1. incorporate appstackr 0.3.0 and as an appstackr example -- autoprefixer, browser-sync, files watch, browserify enhanced...etc.
2. add support of swig and drop jade
3. drop css|less|compass|stylus engine, and use appstackr instead
4. add initial support of stylesheet, and defaults to scss
```

## Installation

```sh
$ npm install -g benpptung/generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

Create the app:

```bash
$ express /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm install
```

Rock and Roll

```bash
$ npm run bsync
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to swig)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  initial stylesheet support (less|stylus|scss|css) (defaults to plain scss)
    -f, --force         force on non-empty directory

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg?style=flat
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux&style=flat
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows&style=flat
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg?style=flat
[downloads-url]: https://npmjs.org/package/express-generator
[gratipay-image]: https://img.shields.io/gratipay/dougwilson.svg?style=flat
[gratipay-url]: https://gratipay.com/dougwilson/
