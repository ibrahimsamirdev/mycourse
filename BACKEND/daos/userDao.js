const mongoose = require('mongoose');
const { usersModel, coursesModel, lecturesModel } = require('../models/schema');

function getByEmail(email) {
    return usersModel.findOne({ email: email });
}

function add(user) {
    // return usersModel.insertOne(user);
    const newUser = new usersModel({ _id: mongoose.Types.ObjectId(), ...user } ) ;
    newUser.save();
    return newUser;
}

function update(id, user) {
    return usersModel.updateOne({ _id: ObjectId(id) }, { $set : { password: user.password}});
}

module.exports = { getByEmail, add, update }
