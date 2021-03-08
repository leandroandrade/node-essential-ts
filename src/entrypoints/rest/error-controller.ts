import { Request, Response } from 'express';
import { InvalidInputError } from '../../commons/errors';

const runError = (req: Request, res: Response, next): Promise<Response> => {
    throw new InvalidInputError(`This is a simple error example!`);
};

export default { runError };
