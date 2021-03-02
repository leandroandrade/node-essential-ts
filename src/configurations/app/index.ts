import * as dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';

import { envs } from '../env';
import setUp from '../setup';
import setDocs from '../documentation';
import setRoutes from '../routes';
import setHanders from '../handlers';

dotenv.config({ path: envs[process.env.NODE_ENV || 'default'] });

const app = express();

setUp(app);
setRoutes(app);
setDocs(app);
setHanders(app);

export default app;
