'use strict';

exports.hello = (req, res, next) => {
    res.send('Hello world!');
}

exports.helloName = (req, res, next) => {
    res.send('Hello ' + req.body.name + '!');
}
