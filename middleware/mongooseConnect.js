// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const uri = 'mongodb+srv://mwaDG:mongo123@cluster0-seryv.gcp.mongodb.net/mycourse?retryWrites=true&w=majority';
const database = 'mycourse';
// const client = new MongoClient(uri, { useUnifiedTopology: true });

module.exports.dbConn = async (req, res, next) => {
    // console.log('****************** BEGIN MONGOOSE CONNECTION ************************')
    // console.log(mongoose.connection.db);
    // console.log(mongoose.connection.states);
    // console.log(mongoose.connection.readyState);
    // console.log('****************** END MONGOOSE CONNECTION ************************')
    try {
        if ((mongoose.connection.readyState == 0) && (!mongoose.connection.readyState.db)) {
           await mongoose.connect(uri, { useUnifiedTopology: true })
          .then(_ => console.log(`connected successfully to MongoDB Server`))
          .catch(err => console.log(err));

          db = mongoose.connection;

          db.on('connected', function () {
            console.log('Mongoose default connection open to ' + uri);
          }); 

          db.on('error',function (err) { 
            console.log('Mongoose default connection error: ' + err);
          });

          db.on('disconnected', function () { 
            console.log('Mongoose default connection disconnected'); 
          });
          
          db.once('open', function() {
            console.log("Successfully connected to MongoDB!");
          });
        } else { console.log("Already connected to MongoDB!"); }
        next();
    } catch (err) {
        next(err);
    }
  };