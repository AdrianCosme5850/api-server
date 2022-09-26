'use strict';

const express = require('express');
const app = express();
const foodRouter = require('./routes/food.js')
const clothesRouter = require('./routes/clothes.js')
const notFound = require('./error-handler.js/404')

app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);
app.use(notFound)
app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('listnening on ' + port)
        })
    },
    app,
}
