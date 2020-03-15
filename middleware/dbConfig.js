const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://mwaDG:mongo123@cluster0-seryv.gcp.mongodb.net/test?retryWrites=true&w=majority';
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