const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient("mongodb://127.0.0.1:27017", { useUnifiedTopology: true });
const uri = 'mongodb+srv://mwaDG:mongo123@cluster0-seryv.gcp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useUnifiedTopology: true });
const database = 'mycourse';

let db;

// client.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to DB " + err);
// });

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

// module.exports = client;