import { Request, Response } from 'express';
import { InvalidInputError } from '../../commons/errors';

export default (req: Request, res: Response, next) => {
    throw new InvalidInputError(`This is a simple error example!`);
};
