const mongoose = require('mongoose');
const { userModel } = require('../models/schema');

function getAll(req, res) {
    return userModel.find()
        .select( { 'courses' : 1 } );
}

function getByCatagory(catagory) {
    return usersModel.find({ 'courses' : { '$elemMatch' : { 'category' : category} } })
        .select( { 'courses.$.title' : 1 , 'courses.$.category': 1 } );
}

function getById(courseId) {
    return usersModel.find({ 'courses' : { '$elemMatch' : { '_id' : courseId} } })
        .select( { 'courses.$.title' : 1 , 'courses.$.category': 1 } );
}

module.exports = { getById, getAll, getByCatagory }