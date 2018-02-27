var express = require('express');
var router = express.Router();
const Users = require('../db/models/users')
const db = require('../db/db')


/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('backend')
    Users.findAll()
        .then(users => res.json(users))
        .catch(next)
});

router.get('/users', function(req, res, next) {
    console.log('backend')
    Users.findAll()
        .then(users => res.send(users))
        .catch(next)
});

router.get('/users/login', function(req, res, next) {
    Users.findAll({
            where: {
                email: this.state.email
            }
        })
        .catch(next)

})

router.get('/login', function(req, res, next) {
    Users.findAll({
            where: {
                email: this.state.email
            }
        })
        .catch(next)
})

router.post('/', function(req, res, next) {
    res.send({ message: 'response with a resource' });
});

module.exports = router;