import { Request, Response } from 'express';
import HelloRepository from '../../dataproviders/repositories/hello-repository';

const getHello = async (req: Request, res: Response): Promise<Response> => {
    const message = await HelloRepository.getMessage();
    return res.json({
        title: 'hello',
        message,
    });
};

export default {
    getHello,
};
