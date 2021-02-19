import * as dotenv from 'dotenv';
import express from 'express';

import { envs } from '../env';
import setUp from '../setup';
import setDocs from '../documentation';
import setRoutes from '../routes';
import setHanders from '../handlers';

dotenv.config({ path: envs[process.env.NODE_ENV || 'default'] });

const app = express();

setRoutes(app);
setDocs(app);
setHanders(app);
setUp(app);

export default app;
