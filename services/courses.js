const coursesDao = require('../daos/courses')

function getAll(req, res) {
    console.log('In service');
    return coursesDao.getAll(req);
}

function getById(lectureId) {
    return coursesDao.getById(lectureId);
}

function add(req) {
    console.log('In ADD service');
    console.dir(req.body);
    return coursesDao.add(req);
}

function del(lecture) {
    return coursesDao.del(lecture);
}

module.exports = { getAll, getById, add, del }