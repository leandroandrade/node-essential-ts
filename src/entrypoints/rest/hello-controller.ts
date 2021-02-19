import HelloRepository from '../../dataproviders/repositories/hello-repository';

export default async (req, res, next) => {
    const message = await new HelloRepository().getMessage();
    return res.json({
        title: 'hello',
        message,
    });
};
