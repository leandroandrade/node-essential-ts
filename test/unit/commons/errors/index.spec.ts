import { InvalidInputError } from '../../../../src/commons/errors';

describe('errors test', () => {
    it('should return values specified in InvalidInputError', async (done) => {
        const err = new InvalidInputError('Some message', 401);
        const { message, name } = err;

        expect(message).toBe('Some message');
        expect(name).toBe('InvalidInputError');

        done();
    });

    it('should return values default in InvalidInputError', async (done) => {
        const err = new InvalidInputError();
        const { message, name } = err;

        expect(message).toBe('Input error');
        expect(name).toBe('InvalidInputError');

        done();
    });
});
