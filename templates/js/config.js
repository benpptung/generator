'use strict';

var join = require('path').join;

exports.views = function(app) {
  return app.get('env') == 'production' ? join(__dirname, '..', 'dist', 'views') : join(__dirname, '..', 'views');
};