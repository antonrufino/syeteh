'use strict';
const importer = require('anytv-node-importer');

module.exports = (router) => {
    const __ = importer.dirloadSync(__dirname + '/../controller');

    router.put('/add', __.student.add);
    router.get('/view/all', __.student.viewAll);
    router.get('/view/student/:batch/:number', __.student.view);
    router.get('/view/filter/:filter', __.student.viewWithFilter);
    router.get('/search', __.student.search);
    router.get('/edit', __.student.edit);
    router.delete('/delete', __.student.delete);

    return router;
}
