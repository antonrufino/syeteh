'use strict';

module.exports = (router) => {
    router.get('/', (req, res, next) => {
        res.send('Hello world!');
    });

    return router;
}
