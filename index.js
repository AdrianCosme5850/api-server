'use strict';

const { db } = require('./lib/models');
const {start} = require('./lib/server')
const PORT = process.env.PORT || 3002;

db.sync()
.then(() => {
    start(PORT)
})
.catch(error => {
    console.log(error)
})