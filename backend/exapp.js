var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categories = require('./routes/categories');  

var sensors = require('./routes/sensors');  
var cors = require('cors')
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categories);
app.use('/categories/cata/:username', categories);
app.use('/categories/catas/:id', categories);
app.use('/categories/cat/:id', categories);
app.use('/sensors', sensors);
app.use('/sensors/:id', sensors);

//app.use('/indice', indices);
//app.use('/api/v1/examples', examplesRouter);

module.exports = app;
