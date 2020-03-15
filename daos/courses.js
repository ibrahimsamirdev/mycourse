// const ObjectId = require('mongodb').ObjectID;
// const client = require('../dbConfig')

// const db = client.db('mycourse');
// const collection = db.collection('users');
const mongoose = require('mongoose');
const { usersModel } = require('../models/schema');

function getAll(req, res) {
    console.log('Find all courses');
    // const collection = req.db.collection('users');
    // console.log(req.db);
    // return collection.find({}).toArray();

    // return mongoose.model('users').find();
    return usersModel.find();
//   });
}

function getById(id) {
    // return collection.findOne({ _id: ObjectId(id) });]\
    return null;
}

// add = async function (req, res, next) {
function add(req, res, next) {
    // const collection = req.db.collection('users');
    // return collection.insertOne(req.body);

    // console.log(req.body)
    const newUser = new usersModel({ _id: mongoose.Types.ObjectId(), ...req.body } ) ;
    
    newUser.save()
    .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
      });
    return newUser;
}

function del(id) {
    // return collection.remove({ _id: ObjectId(id) });
    return null;
}

module.exports = { getAll, getById, add, del }
