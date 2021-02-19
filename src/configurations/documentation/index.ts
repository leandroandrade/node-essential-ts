import express, { Express } from 'express';
import path from 'path';
import yamljs from 'yamljs';
import swaggerUi from 'swagger-ui-express';

export default (app: Express): void => {
    const swagger = path.join(
        __dirname,
        '..',
        '..',
        '..',
        'swagger',
        'example-swagger.yaml'
    );
    const document = yamljs.load(swagger);

    app.use('/api-specs', express.static(swagger));
    app.use(
        '/api-docs',
        (req, res, next) => {
            document.host = req.get('host');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            req.swaggerDoc = document;
            next();
        },
        swaggerUi.serve,
        swaggerUi.setup()
    );
};
