import request from 'supertest';
import app from '../src/app';
import { Server } from 'http';

let server: Server;

beforeAll((done) => {
    server = app.listen(done);
});

afterAll((done) => {
    server.close(done);
});

describe('GET /jokes', () => {
    it('should return a joke', async () => {
        const res = await request(app).get('/jokes');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('jokes');
    });
});