import { Router } from 'express';
import HelloController from '../../entrypoints/rest/hello-controller';

export default (router: Router): void => {
    router.get('/hello', HelloController);
};
