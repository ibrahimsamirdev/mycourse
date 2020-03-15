// const ObjectId = require('mongodb').ObjectID;
// const client = require('../dbConfig')

// const db = client.db('mycourse');
// const collection = db.collection('Lectures');
const mongoose = require('mongoose');
const { usersModel, coursesModel, lecturesModel } = require('../models/schema');

function getAll() {
    // return collection.find().toArray();
    return null;
}

function getByCourseId(courseId) {
    // return collection.findOne({ _id: ObjectId(id) });]\
    // return coursesModel.find( { '_id' : courseId } )
        // .select( { 'lectures' : 1  } );
    return usersModel.find({ 'courses' : { '$elemMatch' : { '_id' : courseId} } })
        .select( { 'courses.$.lectures' : 1 } );
}

function getById(id) {
    // return collection.findOne({ _id: ObjectId(id) });
    return null;
}

function add(req) {
    // return collection.insertOne(lecture);
    const newLecture = new lecturesModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    const courseId = req.params.course_id;

    newLecture.save();

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
    // return collection.remove({ _id: ObjectId(id) });
    return null;
}

module.exports = { getAll, getByCourseId, getById, add, del }
