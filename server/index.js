'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();
// const apiRouter = require('./api');
// const  = require('./api/student');

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', require('./routes/users')) //apiRouter); // include our routes!

// app.use('/api/campuses', campusesRouter);
// app.use('/api/students', studentsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;

w
// var express = require('express');
// var path = require('path');
// // var favicon = require('serve-favicon');
// var logger = require('morgan');
// // var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// const sequelize = require('sequelize');

// var index = require('./routes/index');
// var users = require('./routes/users');

// var Users = require('./db/models/users');


// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });




// /* GET users listing. */
// // app.get('/', function(req, res, next) {
// //     Users.findAll()
// //         .then(users => res.json(users))
// //         .catch(next)
// // });

// module.exports = app;