const enrollsDao = require('../daos/enrolls')

function getAll() {
    return enrollsDao.getAll(userId)
}

function getById(lectureId) {
    return enrollsDao.getById(userId, lectureId);
}

function add(lectureId) {
    return enrollsDao.add(userId, lectureId);
}

function del(lecture) {
    return enrollsDao.del(userId, lecture);
}

module.exports = { getAll, getById, add, del }