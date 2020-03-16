const ObjectId = require('mongodb').ObjectID;
const client = require('../dbConfig')

const db = client.db('mycourse');
const collection = db.collection('users');
/**
 * Get all enrolled courses by userId
 */
function getAll(uid) {
    return collection.find({ _id: ObjectId(uid) }, { projection: { enrolled: 1 } }).toArray();
}
/**
 * Get one enrolled course by userId and courseId
 */
function getById(uid, id) {
    return collection.findOne({ _id: ObjectId(uid), 'enrolled._id': ObjectId(id) }, { projection: { 'enrolled.$': 1 } });
}
/**
 * Add course(Enroll in) to enrolled list by userId
 */
function add(uid, course) {
    return collection.updateOne({ _id: ObjectId(uid) }, { $push: { enrolled: course } });
}
/**
 * Remove(unenroll) from enrolled list by userId and courseId
 */
function del(uid, id) {
    collection.updateOne({ _id: ObjectId(uid) }, { $pull: { enrolled: { _id: ObjectId(id) } } });
}
/**
 * Update enrolled course by userId, enrolled courseId, and lectureId (set visited to true)
 */
function updateEnrollLecture(uid, cid, id) {
    collection.updateOne({ _id: ObjectId(uid), 'enrolled._id': ObjectId(cid) }, { $set: { 'enrolled.$.lectures.$[lecture].visited': true } },
        { arrayFilters: [{ "lecture._id": ObjectId(id) }] }
    );
}

module.exports = { getAll, getById, add, del, updateEnrollLecture }
