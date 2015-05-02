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
    files: [
      'client/site/env.js',
      'superagent',
      'node_modules/ractive/ractive-legacy.runtime.min.js'
    ],
    browserify: {
      exposes: 'ractive-legacy.runtime.min.js:ractive, superagent'
    }
  },
  {
    name: 'base/iefix',
    nature: 'js',
    files: [
      'node_modules/html5shiv/dist/html5shiv.min.js',
      'node_modules/respond.js/dest/respond.matchmedia.addListener.min.js'
    ]
  }
];