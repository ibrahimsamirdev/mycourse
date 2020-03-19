const mongoose = require('mongoose');
const { usersModel, coursesModel, lecturesModel } = require('../models/schema');

function getAll() {
    return null;
}

function getByCourseId(courseId) {
    return usersModel.find({ 'courses' : { '$elemMatch' : { '_id' : courseId} } })
        .select( { 'courses.$.lectures' : 1 } );
}

function getById(id) {
    return null;
}

function add(req) {
    console.log('IN DAO');
    console.dir(req.body);
    console.log(req.params.course_id);
    const newLecture = new lecturesModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    const courseId = req.params.course_id;

    // newLecture.save();

    usersModel.updateMany( { 'courses' : { '$elemMatch' : { '_id' : courseId } } } , 
        { '$push' : { 'courses.$.lectures' : newLecture } },
    {safe: true, upsert: true},
    function(err, doc) {
        if(err){
        console.log(err);
        }else{
        //do stuff
        }
    }
    );
    
    return newLecture;
}

function del(id) {
    return null;
}

module.exports = { getAll, getByCourseId, getById, add, del }
