import { InvalidInputError } from '../../commons/errors';

export default (req, res, next) => {
    throw new InvalidInputError(`This is a simple error example!`);
};
