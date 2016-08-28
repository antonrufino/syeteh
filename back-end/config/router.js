'use strict';
const importer = require('anytv-node-importer');

module.exports = (router) => {
    const __ = importer.dirloadSync(__dirname + '/../controller');

    router.get('/', __.hello.hello);
    router.post('/hello/name', __.hello.helloName);

    return router;
}
