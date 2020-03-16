const ObjectId = require('mongodb').ObjectID;
const client = require('../dbConfig')

const db = client.db('mycourse');
const collection = db.collection('users');

function getAll(uid) {
    return collection.find({ _id: ObjectId(uid) }).toArray();
}

function getById(uid, id) {
    return collection.findOne({ _id: ObjectId(uid), enrolled: ObjectId(id) });
}

function add(uid, course) {
    return collection.updateOne({ _id: ObjectId(uid) }, { $push: { enrolled: course } });
}

function del(uid, id) {
    return collection.remove({ _id: ObjectId(uid), enrolled: ObjectId(id) });
}

module.exports = { getAll, getById, add, del }
