const request = require('supertest');
const app = require('../index');

describe('Test de endpoint GET /', () => {
  it('debería responder con "¡Hola, mundo de CI/CD!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('¡Hola, mundo de CI/CD!');
  });
});
