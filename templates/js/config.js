'use strict';

var join = require('path').join;

exports.views = function(app) {
  return app.get('env') == 'production' ? join(__dirname, 'dist', 'views') : join(__dirname, 'views');
};

exports.staticOpt = function(app) {
  if (app.get('env') == 'production') {
    return {
      lastModified: false,
      setHeaders: function(res, path) {
        res.set({
          "Cache-Control": "max-age=290304000, public",
          "Expires": "Thu, 6 Apr 2030 20:00:00 GMT"
        })
      }
    }
  }
};

exports.staticPath = function(app) {
  return app.get('env') == 'production' ? join(__dirname, 'dist', 'public') : join(__dirname, 'public');
};