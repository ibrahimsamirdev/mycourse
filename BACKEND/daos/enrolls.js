const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const dotenv = require('dotenv');
dotenv.config();
// const uri = `mongodb+srv://${process.env.DB_USER2}:${process.env.DB_PASS2}@cluster0-h0omh.mongodb.net/test?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-seryv.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://mcuser:mcu1234@cluster0-h0omh.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection = null;
// client.connect(function (err) {
//     if (err) throw err;
//     collection = client.db('mycourse').collection('users');
//     console.log("******** Connected to DB **********");
// });


/**
 * Get all enrolled courses by userId
 */
function getAll(uid) {
    return collection.find({ _id: ObjectId(uid) }, { projection: { enrolled: 1 } }).toArray();
    // return collection.find().toArray();
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
async function add(uid, id) {
    const result = await collection.findOne({ 'courses._id': ObjectId(id) }, { projection: { '_id': 0, 'courses.$': 1 } });
    if (result) {
        // console.log(result.courses[0], { depth: null });
        collection.updateOne({ _id: ObjectId(uid) }, { $push: { enrolled: result.courses[0] } });
    }
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
