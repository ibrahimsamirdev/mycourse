// const ObjectId = require('mongodb').ObjectID;
// const client = require('../dbConfig')

// const db = client.db('mycourse');
// const collection = db.collection('users');

getAll = async function (req, res) {
    console.log('Find all courses');
    const collection = req.db.collection('users');
    console.log(req.db);
    return collection.find({}).toArray();
}

function getById(id) {
    // return collection.findOne({ _id: ObjectId(id) });]\
    return null;
}

function add(req) {
    const collection = req.db.collection('users');
    return collection.insertOne(req.body);
}

function del(id) {
    // return collection.remove({ _id: ObjectId(id) });
    return null;
}

module.exports = { getAll, getById, add, del }
