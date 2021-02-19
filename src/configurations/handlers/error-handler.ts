import logger from '../logger';

export default (err, req, res, next): void => {
    logger.error('Server ERROR:', err);

    next(err);
};
