export class InvalidInputError extends Error {
    constructor(message: string, statusCode?: number) {
        super(message || 'Input error');
        this.name = 'InvalidInputError';
        // this.statusCode = statusCode || 400;
    }
}
