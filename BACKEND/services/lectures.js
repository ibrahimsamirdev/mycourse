const lecturesDao = require('../daos/lectures')

function getAll() {
    return lecturesDao.getAll()
}

function getByCourseId(req, res) {
    return lecturesDao.getByCourseId(req.params.course_id);
}

function getById(lectureId) {
    return lecturesDao.getById(lectureId);
}

function add(req, res) {
    return lecturesDao.add(req);
}

function del(lecture) {
    return lecturesDao.del(lecture);
}

module.exports = { getAll, getByCourseId, getById, add, del }