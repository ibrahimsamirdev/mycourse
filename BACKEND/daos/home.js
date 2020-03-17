const client = require('../dbConfig')
const ObjectId = require('mongodb').ObjectID

const db = client.db('mycourse');
const collection = db.collection('User');

function getAll(req, res) {
    return collection.flatMap(user=>user.courses);
}

// function getByCatagory(courseId) {
//     return collection.flatMap(user=>user.courses.catagory)
// }


module.exports = { getByCatagory, getAll }
