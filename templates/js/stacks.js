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
      'superagent'
    ],
    browserify: {
      exposes: '*'
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