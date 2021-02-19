import { Request, Response } from 'express';
import HelloRepository from '../../dataproviders/repositories/hello-repository';

export default async (req: Request, res: Response, next) => {
    const message = await HelloRepository.getMessage();
    return res.json({
        title: 'hello',
        message,
    });
};
