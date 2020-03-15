const lecturesDao = require('../daos/lectures')

function getAll() {
    return lecturesDao.getAll()
}

function getById(lectureId) {
    return lecturesDao.getById(lectureId);
}

function add(lectureId) {
    return lecturesDao.add(lectureId);
}

function del(lecture) {
    return lecturesDao.del(lecture);
}

module.exports = { getAll, getById, add, del }