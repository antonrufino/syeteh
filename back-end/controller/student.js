'use strict';

exports.add = (req, res, next) => {
    res.send("Syeteh: Enrolling students with full units + PE like an actual student information system.")
}

exports.viewAll = (req, res, next) => {
    res.send('Syeteh: Viewing all students like an actual student information system.');
}

exports.view = (req, res, next) => {
    res.send('Syeteh: Viewing ' + req.params.batch + '-' +
        req.params.number + ' like an actual student information system.');
}

exports.viewWithFilter = (req, res, next) => {
    res.send('Syeteh: Viewing using ' + req.params.filter +
        ' filter like an actual student information system.');
}

exports.search = (req, res, next) => {
    res.send('Syeteh: Searching data like an actual student information system.');
}

exports.edit = (req, res, next) => {
    res.send('Syeteh: Editing data like an actual student information system.');
}

exports.delete = (req, res, next) => {
    res.send('Syeteh: Deleting data like an actual student information system.');
}
