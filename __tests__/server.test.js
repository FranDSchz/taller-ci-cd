const request = require('supertest');
const app = require('../index');

describe('Test de endpoint GET /', () => {
  it('debería responder con "¡Hola, mundo!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('¡Hola, mundo!');
  });
});

describe('Test de endpoint GET /saludo/nombre',()=> {
    const nombre = 'Franco'
    it(`deberia responder con un ¡Hola, ${nombre}!`, async () => {
        const res = await request(app).get(`/saludo/${nombre}`);
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe(`¡Hola, ${nombre}!`);
    });
});