const coursesDao = require('../daos/courses')

function getAll(req, res) {
    console.log('GETALL courses service');
    return coursesDao.getAll(req);
}

function getByUserId(req, res) {
    return coursesDao.getByUserId(req.params.user_id);
}

function getById(req, res) {
    return coursesDao.getById(req.params.course_id);
}

function add(req, res) {
    console.log('ADD course service');
    return coursesDao.add(req);
}

function del(lecture) {
    return coursesDao.del(lecture);
}

module.exports = { getAll, getByUserId, getById, add, del }