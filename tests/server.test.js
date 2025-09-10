const request = require('supertest');
const app = require('../src/server');

describe('Poketto API', () => {
    describe('GET /api/health', () => {
        it('should return API health status', async () => {
            const res = await request(app)
                .get('/api/health')
                .expect(200);
            
            expect(res.body).toHaveProperty('status', 'OK');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('timestamp');
        });
    });

    describe('GET /api/pokemon', () => {
        it('should return pokemon endpoints information', async () => {
            const res = await request(app)
                .get('/api/pokemon')
                .expect(200);
            
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('endpoints');
            expect(Array.isArray(res.body.endpoints)).toBe(true);
        });
    });

    describe('GET /api/pokemon/:id', () => {
        it('should return pokemon data for valid id', async () => {
            const res = await request(app)
                .get('/api/pokemon/1')
                .expect(200);
            
            expect(res.body).toHaveProperty('id', '1');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('type');
            expect(res.body).toHaveProperty('stats');
        });

        it('should return pokemon data for any id', async () => {
            const res = await request(app)
                .get('/api/pokemon/25')
                .expect(200);
            
            expect(res.body).toHaveProperty('id', '25');
            expect(res.body).toHaveProperty('name', 'Pokemon 25');
        });
    });

    describe('GET /nonexistent', () => {
        it('should return 404 for nonexistent routes', async () => {
            const res = await request(app)
                .get('/nonexistent')
                .expect(404);
            
            expect(res.body).toHaveProperty('error', 'Route not found');
        });
    });
});