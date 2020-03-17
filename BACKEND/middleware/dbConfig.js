const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

// Use dotenv to mask the connection keys
const result = dotenv.config();
if (result.error) {
  throw result.error
}
// const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-5spdp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const uri= `mongodb://127.0.0.1:27017`
const database = 'mycourse';
const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

module.exports.dbConn = async (req, res, next) => {
    try {
        if (!db) {
            await client.connect() ;
            db = client.db(database);
            console.log('connected to db');
        }
        req.db = db;
        next();
    } catch (err) {
        next(err);
    }
}