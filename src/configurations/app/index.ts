import express from 'express';

import setUp from '../setup';
import setDocs from '../documentation';
import setRoutes from '../routes';
import setHanders from '../handlers';

const app = express();

setRoutes(app);
setDocs(app);
setHanders(app);
setUp(app);

export default app;
