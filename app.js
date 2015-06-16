var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var pg = require('pg');

// ROUTES
var routes = require('./routes/index');
var users = require('./routes/users');
var dragable = require('./routes/dragable');
var conditionals = require('./routes/conditionals');
var create = require('./routes/create');

// DECLARATIONS
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// APP USAGE SETUP

app.use(stormpath.init(app, {
  apiKeyId:     process.env.STORMPATH_API_KEY_ID,
  apiKeySecret: process.env.STORMPATH_API_KEY_SECRET,
  secretKey:    process.env.STORMPATH_SECRET_KEY,
  application:  process.env.STORMPATH_URL,
}));

// **uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/dragable', dragable);
app.use('/conditionals', conditionals);
app.use('/create', create);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

module.exports = app;
