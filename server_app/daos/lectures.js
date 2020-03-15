const ObjectId = require('mongodb').ObjectID;
const client = require('../dbConfig')

const db = client.db('mycourse');
const collection = db.collection('Lectures');

function getAll() {
    return collection.find().toArray();
}

function getById(id) {
    return collection.findOne({ _id: ObjectId(id) });
}

function add(lecture) {
    return collection.insertOne(lecture);
}

function del(id) {
    return collection.remove({ _id: ObjectId(id) });
}

module.exports = { getAll, getById, add, del }
