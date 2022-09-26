'use strict';

const {Food, db} = require('../lib/models/index.js')

beforeAll(async () => {
    await db.sync()
});

describe('Tests for my various endpoints', () => {
    test('Should be able to add a food record to the /food endpoint', async () => {
        let response = await Food.create({
            name:"Banana",
        })
        expect(response.id).toBeTruthy();
        expect(response.name).toEqual("Banana")
    })
})
