'use strict';

const express = require('express')
const { Clothes } = require('../models/index');
const router = express.Router();

let createClothes = async (request, response) => {
    let createdClothes = await Clothes.create(request.body);
    response.status(200);
    response.send(createdClothes);
}

let getClothes = async(request, response) => {
    let gottenClothes = await Clothes.read(request.query.id);
    response.status(200);
    response.send(gottenClothes)
}

let updateClothes = async (request, response) => {
    let updatedClothes = await Clothes.update(request);
    response.status(200);
    response.send(updatedClothes);
}
let deleteClothes = async (request, response) => {
    let deletedClothes =  Clothes.delete(request.query.id);
    response.status(200);
    response.send(deletedClothes);
}

router.post('/clothes', createClothes);
router.get('/clothes', getClothes);
router.put('/clothes', updateClothes)
router.delete('/clothes', deleteClothes)

module.exports = router;