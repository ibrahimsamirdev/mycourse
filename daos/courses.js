// const ObjectId = require('mongodb').ObjectID;
// const client = require('../dbConfig')

// const db = client.db('mycourse');
// const collection = db.collection('users');
const mongoose = require('mongoose');
const { usersModel, coursesModel, lecturesModel } = require('../models/schema');

function getAll(req, res) {
    console.log('Find all courses');
    // const collection = req.db.collection('users');
    // console.log(req.db);
    // return collection.find({}).toArray();

    // return mongoose.model('users').find();
    return usersModel.find()
        .select( { 'courses' : 1 } );
//   });
}

function getByUserId(userId) {
    // return collection.findOne({ _id: ObjectId(id) });]\
    return usersModel.find( { '_id' : userId } )
        .select( { 'fullName' : 1 , 'courses' : 1 } );
}

function getById(courseId) {
    // return collection.findOne({ _id: ObjectId(id) });]\
    return coursesModel.findById( courseId )
    // return usersModel.findOne( { 'courses._id' : courseId } )
    //     .select( { 'courses.$' : 1 } );
}

// add = async function (req, res, next) {
function add(req) {
    // const collection = req.db.collection('users');
    // return collection.insertOne(req.body);

    // console.log(req.body)
    const newCourse = new coursesModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    
    newCourse.save();

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
    // return collection.remove({ _id: ObjectId(id) });
    return null;
}


module.exports = { getAll, getByUserId, getById, add, del }

// ADD USER
// function add_user(req, res, next) {
//     // const collection = req.db.collection('users');
//     // return collection.insertOne(req.body);

//     // console.log(req.body)
//     const newUser = new usersModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    
//     newUser.save()
//     .then(doc => {
//         console.log(doc)
//       })
//       .catch(err => {
//         console.error(err)
//       });
//     return newUser;
// }

