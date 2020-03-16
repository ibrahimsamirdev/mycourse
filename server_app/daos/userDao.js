const client = require('../dbConfig')
const ObjectId = require('mongodb').ObjectID

const db = client.db('mycourse');
const collection = db.collection('User');

function getByEmail(email) {
    return collection.findOne({ email: email });
}

function add(user) {
    return collection.insertOne(user);
}

function update(id, user) {
    return collection.updateOne({ _id: ObjectId(id) }, { $set : { password: user.password}});
}

module.exports = { getByEmail, add, update }
