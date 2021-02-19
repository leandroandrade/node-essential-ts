import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';

export default (app: Express): void => {
    const router = Router();

    app.use('/api/v1', router);

    readdirSync(`${__dirname}`).map(async (file) => {
        if (file.endsWith('routes.ts')) {
            (await import(join(__dirname, file))).default(router);
        }
    });
};
