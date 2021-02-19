import { Router } from 'express';

export default (router: Router): void => {
    router.get('/hello', (req, res) => {
        return res.json({ hello: true });
    });
};
