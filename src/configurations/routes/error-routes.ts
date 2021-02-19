import { Router } from 'express';

export default (router: Router): void => {
    router.get('/error', (req, res) => {
        return res.json({ error: true });
    });
};
