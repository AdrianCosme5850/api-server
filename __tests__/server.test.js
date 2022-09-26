'use strict';

const supertest = require('supertest');
const app = require('../lib/server');
const request = supertest(app.app);
const {db} = require('../lib/models/index')

beforeAll(async () => {
    await db.sync();
  });

describe('Testing server endpoints', () => {
    test('I should be able to create a record with /food', async () => {
        let response = await request.post('/food').send({ name:"Banana"})
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("Banana")
    })
    test('I should be able to read records with /food', async () => {
        let response = await request.get('/food')
        expect(response.status).toEqual(200);
        expect(response.body);
    })
    test('I should be able to read a specific record with /food', async () => {
        let response = await request.get('/food?id=1')
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("Banana")
    })
    test('I should be able to update a record /food', async () => {
        let response = await request.put('/food?id=1').send({name:"Cucumber"})
        expect(response.status).toEqual(200);
        expect(response.body.name).toEqual("Cucumber")
    })
    test('I should be able to delete a record with /food', async () => {
        let response = await request.delete('/food?id=1')
        expect(response.status).toEqual(200);
    })
}) 