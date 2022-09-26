'use strict';

const express = require('express')
const { Food } = require('../models/index');
const router = express.Router();

let createFood = async (request, response, next) => {
    if(!request.body){next('No body')}
    let createdFood = await Food.create(request.body);
    response.status(200);
    response.send(createdFood);
}

let getFood = async(request, response, next) => {
    let gottenFood = await Food.read(request.query.id);
    response.status(200);
    response.send(gottenFood)
}

let updateFood = async (request, response, next) => {
    if(!request.query.id){next('No body')} else{
    let updatedFood = await Food.update(request);
    response.status(200);
    response.send(updatedFood);}
}
let deleteFood = async (request, response, next) => {
    if(!request.query.id){next('No id')}
    let deletedFood =  Food.delete(request.query.id);
    response.status(200);
    response.send(deletedFood);
}

router.post('/food', createFood);
router.get('/food', getFood);
router.put('/food', updateFood)
router.delete('/food', deleteFood)

module.exports = router;