// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const uri = 'mongodb+srv://mwaDG:mongo123@cluster0-seryv.gcp.mongodb.net/mycourse?retryWrites=true&w=majority';
const database = 'mycourse';
// const client = new MongoClient(uri, { useUnifiedTopology: true });

let db;

module.exports.dbConn = async (req, res, next) => {
    try {
        if (!db) {
           db = await 
           mongoose.connect(uri, { useUnifiedTopology: true })
          .then(_ => console.log(`connected successfully to MongoDB Server`))
          .catch(err => console.log(err));
        }
        req.db = db;
        next();
    } catch (err) {
        next(err);
    }
  };