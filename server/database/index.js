
var mongoose = require('mongoose');

const mongodbHost = process.env.MONGO_HOST;
const mongodbPort = process.env.MONGO_PORT;
const mongodbDatabase = process.env.MONGO_DB;

const mongodbUser = process.env.MONGO_USER || "";
const mongodbPass = process.env.MONGO_PASS || ""

let authString = "";

let connectionString = "";

const hostIsUrl = process.env.MONGO_HOST_IS_URL || "false";

if (mongodbUser.length > 0 && mongodbPass.length > 0) {
    authString = `${mongodbUser}:${mongodbPass}@`;
}

if (hostIsUrl.toLowerCase() === "true") {
    connectionString = `mongodb+srv://${authString}${mongodbHost}/${mongodbDatabase}`;
}else {
    connectionString = `mongodb://${authString}${mongodbHost}:${mongodbPort}/${mongodbDatabase}`;
}

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Successfully connected to MongoDB")
})
.catch((e) => console.log("Error connecting to MongoDB", e));

const UserClient = require('./models/UserClient');
const UserPerformer = require('./models/UserPerformer');
const Gig = require('./models/Gig');
const db = mongoose.connection;
 
module.exports = {UserClient, UserPerformer, Gig, db};