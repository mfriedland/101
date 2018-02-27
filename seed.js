const chance = require('chance')(123);
const toonAvatar = require('cartoon-avatar');
const Promise = require('bluebird');

const User = require('./server/db/models/users');
const db = require('./server/db/db');

const numUsers = 100;
const numStories = 500;

const emails = chance.unique(chance.email, numUsers);

function doTimes(n, fn) {
    const results = [];
    while (n--) {
        results.push(fn());
    }
    return results;
}

function randPhoto(gender) {
    gender = gender.toLowerCase();
    const id = chance.natural({
        min: 1,
        max: gender === 'female' ? 114 : 129
    });
    return toonAvatar.generate_avatar({ gender: gender, id: id });
}

function randUser() {
    const gender = chance.gender();
    return User.build({
        firstName: [chance.first({ gender: gender }), chance.last()].join(' '),
        photo: randPhoto(gender),
        email: emails.pop(),
        // password: chance.word(),
        isAdmin: chance.weighted([true, false], [5, 95])
    });
}



function generateUsers() {
    const users = doTimes(numUsers, randUser);
    users.push(User.build({
        name: 'Zeke Nierenberg',
        photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/zeke-astronaut.png',
        phone: '(510) 295-5523',
        email: 'zeke@zeke.zeke',
        password: '123',
        isAdmin: false
    }));
    users.push(User.build({
        name: 'Omri Bernstein',
        photo: 'http://learndotresources.s3.amazonaws.com/workshop/55e5c92fe859dc0300619bc8/sloth.jpg',
        phone: '(781) 854-8854',
        email: 'omri@omri.omri',
        password: '123',
        isAdmin: true
    }));
    users.push(User.build({
        name: 'Kate Humphrey',
        photo: 'https://learndotresources.s3.amazonaws.com/workshop/59ea65d1badb1d0004bf4ca3/baby%20hippo.jpg',
        phone: '(555) 623-7878',
        email: 'kate@kate.kate',
        password: '7890',
        isAdmin: true
    }));
    return users;
}

// function generateStories(createdUsers) {
//     return doTimes(numStories, () => randStory(createdUsers));
// }

function createUsers() {
    return Promise.map(generateUsers(), user => user.save());
}

// function createStories(createdUsers) {
//     return Promise.map(generateStories(createdUsers), story => story.save());
// }

function seed() {
    return createUsers()
        // .then(createdUsers => createStories(createdUsers));
}

console.log('Syncing database');

db.sync()
    .then(() => {
        console.log('Seeding database');
        return seed();
    })
    .then(() => console.log('Seeding successful'))
    .catch(err => {
        console.error('Error while seeding');
        console.error(err.stack);
    })
    .finally(() => {
        db.close();
        return null;
    });