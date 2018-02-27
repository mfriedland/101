const Sequelize = require('sequelize');

const db = require('../db');

const Users = db.define('user', {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        photo: {
            type: Sequelize.STRING,
            defaultValue: '/images/default-photo.jpg'
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: Sequelize.STRING,
        // isAdmin: {
        //     type: Sequelize.BOOLEAN,
        //     defaultValue: false
        // }
    },
    // {
    //     scopes: {
    //         populated: () => ({
    //             include: [{
    //                 model: db.model('story'),
    //                 attributes: { exclude: ['paragraphs'] }
    //             }]
    //         })
    //     }
    // }
);

module.exports = Users;