const users = [{
    fullName: String,
    email: String,
    password: String,
    profilePic: String,
    biography: String,
    about: String,
    websiteUrl: String,
    linkedIn: String,
    courses: [
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
                }
            ]
        }
    ],
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
}]

module.exports = users;