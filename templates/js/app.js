var path = require('path');

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dhs = require('domain-http-server');{swig.require}

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// app setup
app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '{views}');

if (app.get('env') != 'production') {
  app.set('view cache', false);{swig.cache}
}

app.use(dhs);
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.set({
    "Cache-Control": "private, no-cache, no-store, must-revalidate",
    "Expires": "Thu, 15 Apr 2000 20:00:00 GMT",
    "Pragma" : "no-cache"
  });
  next();
});

app.use('/', routes);
app.use('/users', users);

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
    message: err.message,
    error: app.get('env') == 'production' ? {} : err
  });
});


module.exports = app;
