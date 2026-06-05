const request = require('supertest');
const app = require('../src/app');

describe('Pruebas de la Aplicación Express', () => {
    
    test('GET /api debe retornar un JSON con el mensaje "¡Hola Mundo desde el Servidor Express!"', async () => {
        const response = await request(app).get('/api');
        
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toEqual({
            message: "¡Hola Mundo desde el Servidor Express!"
        });
    });

    test('GET / debe responder con HTML', async () => {
        const response = await request(app).get('/');
        
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
        expect(response.text).toContain('¡Hola Mundo!');
    });
});
