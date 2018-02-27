'use strict'
const apiRouter = require('express').Router()
module.exports = apiRouter
const db = require('../db/db')
    // const campusesRouter = require('./campuses')
    // const studentsRouter = require('./students')
const users = require('../db/models/users');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!

apiRouter.use('/users', require('./users'));

apiRouter.get('/hey', (req, res) => res.send({ hello: 'world' }))

apiRouter.use(function(req, res) {
    res.status(404).end();
});




// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// router.post('/', function(req, res, next) {
//     res.send({ message: 'response with a resource' })
// });

// module.exports = router;