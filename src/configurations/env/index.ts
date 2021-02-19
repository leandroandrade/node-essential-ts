import { join } from 'path';

export const envs = {
    test: join(__dirname, '..', '..', '..', '.env.test'),
    production: join(__dirname, '..', '..', '..', '.env.production'),
    default: join(__dirname, '..', '..', '..', '.env'),
};
