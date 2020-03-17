const loginDao = require('../daos/userDao')

function getByEmail(email) {
    return loginDao.getByEmail(email)
}

function add(user) {
    return loginDao.add(user);
}

function update(id, user) {
    return loginDao.update(id, user);
}

module.exports = { getByEmail, add, update }