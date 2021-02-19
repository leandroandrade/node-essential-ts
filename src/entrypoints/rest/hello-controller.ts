export default (req, res, next) => {
    return res.json({
        title: 'hello',
        message: 'world',
    });
};
