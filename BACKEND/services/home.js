const coursesDao = require('../daos/home')

function getAll(req, res) {
    console.log('GETALL courses service');
    return homeDao.getAll(req);
}


function getByCatagory(req, res) {
    return homeDao.getByCatagory(req.params.course_id);
}
module.exports = { getAll, getByCatagory }