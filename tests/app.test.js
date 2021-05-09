const request = require('supertest');


const app = require('../src/app');

test('address should not be empty', async () => {
    const res = await request(app).get('/weather')
    expect(res.status).toBe(404)
})

test('address should not be empty error message', async () => {
    const res = await request(app).get('/weather')
    expect(res.body.error).toBe('You must provide an address!')
})

test('Page does not exist',async () => {
    const res = await request(app).get('/max')
    expect(res.status).toBe(404)
})

test('Page in help does not exist',async () => {
    const res = await request(app).get('/help/max')
    expect(res.status).toBe(404)
})