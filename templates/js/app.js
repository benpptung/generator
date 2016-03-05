'use strict';

const STATUS_CODES = require('http').STATUS_CODES;
const join = require('path').join;
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dhs = require('domain-http-server');{swig.require}
const compression = require('compression');
const routes = require('./routes/index');
const config = require('./config');

var app = express();

// app setup
app.disable('etag');
app.set('views', config.views);
app.set('view engine', '{views}');

if (app.get('env') != 'production') {
  app.set('view cache', false);{swig.cache}
}

app.use(dhs);
// uncomment after placing your favicon in /public
//app.use(favicon(join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static(config.publicDir));

app.use(function(req, res, next) {
  res.set({
    "Cache-Control": "private, no-cache, no-store, must-revalidate",
    "Expires": "Thu, 15 Apr 2000 20:00:00 GMT",
    "Pragma" : "no-cache"
  });
  next();
});

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    code: res.statusCode,
    message: app.get('env') == 'production' ? STATUS_CODES[res.statusCode] : err.message,
    error: app.get('env') == 'production' ? {} : err
  });
});


module.exports = app;
