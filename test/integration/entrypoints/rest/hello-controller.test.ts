import request from 'supertest';

import app from '../../../../src/configurations/app';

describe('simple test', () => {
    it('should do something', async (done) => {
        const { status, body } = await request(app).get('/api/v1/hello');

        const { title, message } = body;

        expect(status).toBe(200);
        expect(title).toBe('hello');
        expect(message).toBe('hello node-essential-ts');

        done();
    });
});
