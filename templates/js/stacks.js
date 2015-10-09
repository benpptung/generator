'use strict';

module.exports = [
  {
    name: 'base/site',
    nature: 'css',
    files: [
      'client/site/style.{css}'
    ]
  },
  {
    name: 'base/site',
    nature: 'js',
    files: 'node_modules/react/dist/react-with-addons.js',
    browserify: {
      exposes: 'react-with-addons.js:react'
    }
  },
  {
    name: 'base/bundle',
    nature: 'js',
    files: [
      'superagent'
    ],
    browserify: {
      exposes: '*', externals: 'react'
    }
  },
  {
    name: 'base/iefix',
    nature: 'js',
    files: [
      'node_modules/es5-shim/es5-shim.min.js',
      'node_modules/es5-shim/es5-sham.min.js',
      'node_modules/console-polyfill/index.js',
      'node_modules/html5shiv/dist/html5shiv.min.js',
      'node_modules/respond.js/dest/respond.matchmedia.addListener.min.js'
    ]
  }
];