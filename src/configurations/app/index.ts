import * as dotenv from 'dotenv';
import express from 'express';
import { join } from 'path';

import setUp from '../setup';
import setDocs from '../documentation';
import setRoutes from '../routes';
import setHanders from '../handlers';

const envs = {
    test: join(__dirname, '..', '..', '..', '.env.test'),
    production: join(__dirname, '..', '..', '..', '.env.production'),
    default: join(__dirname, '..', '..', '..', '.env'),
};

dotenv.config({ path: envs[process.env.NODE_ENV || 'default'] });

const app = express();

setRoutes(app);
setDocs(app);
setHanders(app);
setUp(app);

export default app;
