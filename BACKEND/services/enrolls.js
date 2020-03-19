const enrollsDao = require('../daos/enrolls')

function getAll(userId) {
    return enrollsDao.getAll(userId)
}

function getById(userId, courseId) {
    return enrollsDao.getById(userId, courseId);
}

function add(userId, courseId) {
    return enrollsDao.add(userId, courseId);
}

function del(userId, courseId) {
    return enrollsDao.del(userId, courseId);
}

function updateEnrollLecture(userId, courseId, lectureId) {
    return enrollsDao.updateEnrollLecture(userId, courseId, lectureId);
}

module.exports = { getAll, getById, add, del, updateEnrollLecture }