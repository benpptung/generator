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
      'node_modules/react/dist/react-with-addons.js',
      'react-dom'
    ],
    browserify: {
      exposes: 'react-with-addons.js:react, react-dom'
    }
  },
  {
    name: 'base/bundle',
    nature: 'js',
    files: [
      'superagent',

      // following React Add-Ons do not require react/lib/xxx,
      // so no more multiple React copies loaded error.
      // Remove the followings, if they are extraneous
      'react-addons-css-transition-group',
      'react-addons-update',
      'react-addons-transition-group',
      'react-addons-shallow-compare',
      'react-addons-pure-render-mixin',
      'react-addons-linked-state-mixin',
      'react-addons-clone-with-props',
      'react-addons-create-fragment'
    ],
    browserify: {
      exposes: '*', externals: 'react'
    }
  }
];