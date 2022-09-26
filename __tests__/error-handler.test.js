'use strict';

const supertest = require('supertest');
const app = require('../lib/server');
const request = supertest(app.app);
const {db} = require('../lib/models/index');

beforeAll(async () => {
    await db.sync();
  });


describe('Error handling tests', () => {
    test('A bad route should return a 404', async () => {
        let response = await request.get('/frood');
        expect(response.status).toEqual(404);
    })
    test('A bad method should return a 404', async () => {
        let response = await request.put('/food');
        expect(response.status).toEqual(404);
    })
})