import logger from './configurations/logger';
import exit from './configurations/exit';
import app from './configurations/app';

const server = app.listen(process.env.PORT, () => {
    logger.info(`node-essential-ts start on port ${process.env.PORT}`);
    exit(server);
});
