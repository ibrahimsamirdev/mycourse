const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://127.0.0.1:27017", { useUnifiedTopology: true });

client.connect(function (err) {
    if (err) throw err;
});

module.exports = client;