const Gig = require('./models/Gig')
var mongoose = require('mongoose');

const mongodbHost = process.env.MONGO_HOST;
const mongodbPort = process.env.MONGO_PORT;
const mongodbDatabase = process.env.MONGO_DB;

const mongodbUser = process.env.MONGO_USER || "";
const mongodbPass = process.env.MONGO_PASS || ""

let authString = "";

if (mongodbUser.length > 0 && mongodbPass.length > 0) {
    authString = `${mongodbUser}:${mongodbPass}@`;
}
mongoose.connect(`mongodb://${authString}${mongodbHost}:${mongodbPort}/${mongodbDatabase}`, {useNewUrlParser: true})
.then(() => {
    console.log("Successfully connected to MongoDB")
})
.catch((e) => console.log("Error connecting to MongoDB", e));

const UserClient = require('./models/UserClient');
const UserPerformer = require('./models/UserPerformer');
const Gig = require('./models/Gig');

module.exports = {UserClient, UserPerformer, Gig};