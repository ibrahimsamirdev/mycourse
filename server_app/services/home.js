const homeDao = require('../daos/home')

function getAll(req, res) {
    return homeDao.getAll(req);
}

function getByCatagory(req, res) {
    return homeDao.getByCatagory(req.params.catagory);
}

function getById(req, res) {
    return homeDao.getById(req.params.course_id);
}
module.exports = { getAll, getByCatagory, getById };