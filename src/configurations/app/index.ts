import * as dotenv from 'dotenv-safe';
import express from 'express';

import setUp from '../setup';
import setDocs from '../documentation';
import setRoutes from '../routes';
import setHanders from '../handlers';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const app = express();

setRoutes(app);
setDocs(app);
setHanders(app);
setUp(app);

export default app;
