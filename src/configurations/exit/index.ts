import log from '../logger';

const exit = (signal: string, server) => {
    log.info(`${signal} signal received`);

    log.info('Closing HTTP server...');
    server.close(() => {
        log.info('HTTP server closed!');

        process.exit(0);
    });
};

export default (server): void => {
    process.on('SIGTERM', () => exit('SIGTERM', server));
    process.on('SIGINT', () => exit('SIGINT', server));
};
