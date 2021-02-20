export class BaseError extends Error {
    readonly statusCode: number;

    constructor(message: string, name: string, statusCode: number) {
        super(message);

        this.name = name;
        this.statusCode = statusCode || 400;
    }
}
