import { Router } from 'express';
import ErrorController from '../../entrypoints/rest/error-controller';

export default (router: Router): void => {
    router.get('/error', ErrorController.runError);
};
