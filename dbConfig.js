const mongodb = require('mongodb');
const dbName = 'test'
const dbUrl=`mongodb+srv://jainmonula:9uE9swrCEQhdE0rP@cluster0.0gngonl.mongodb.net/${dbName}`
const MongoClient = mongodb.MongoClient
module.exports = {dbName,dbUrl,mongodb,MongoClient}

