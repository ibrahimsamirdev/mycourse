const mongoose = require("mongoose");

const lectureSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    video: String,
    resources: String,
    visited: Boolean 
});

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    category: String,
    level: String,
    prerequisites: String,
    image: String,
    topic: String,
    description: String,
    published: Boolean,
    lectures: [lectureSchema]
});

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: String,
    email: String,
    password: String,
    profilePic: String,
    biography: String,
    about: String,
    websiteUrl: String,
    linkedIn: String,
    courses: [ courseSchema ],
    enrolled: [
        {
            title: String,
            category: String,
            level: String,
            prerequisites: String,
            image: String,
            topic: String,
            description: String,
            published: Boolean,
            lectures: [
                {
                    title: String,
                    description: String,
                    video: String,
                    resources: String,
                    visited: Boolean
                }
            ]
        }
    ]
});

module.exports.lecturesModel = mongoose.model('lectures', lectureSchema);
module.exports.coursesModel = mongoose.model('courses', courseSchema);
module.exports.usersModel = mongoose.model('users', userSchema);
