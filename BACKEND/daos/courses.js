const mongoose = require('mongoose');
const { usersModel, coursesModel, lecturesModel } = require('../models/schema');

function getAll(req, res) {
    return usersModel.find()
        .select( { 'courses' : 1 } );
}

function getByUserId(userId) {
    return usersModel.find( { '_id' : userId } )
        .select( { 'fullName' : 1 , 'courses' : 1 } );
}

function getById(courseId) {
    return coursesModel.findById( courseId )
}

function add(req) {
    const newCourse = new coursesModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    
    // newCourse.save();

    usersModel.findByIdAndUpdate( req.params.user_id, 
        { '$push' : { 'courses' : newCourse } },
    {safe: true, upsert: true},
    function(err, doc) {
        if(err){
        console.log(err);
        }else{
        //do stuff
        }
    }
    );
    
    return newCourse;
}

function del(id) {
    return null;
}

module.exports = { getAll, getByUserId, getById, add, del }