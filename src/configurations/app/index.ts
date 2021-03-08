import * as dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';

import { envs } from '../env';
import setUp from '../setup';
import setRoutes from '../routes';
import setHanders from '../handlers';

dotenv.config({ path: envs[process.env.NODE_ENV || 'default'] });

const app = express();

setUp(app);
setRoutes(app);
setHanders(app);

export default app;
