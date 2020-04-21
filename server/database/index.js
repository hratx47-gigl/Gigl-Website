const {seedGigs} = require('./seedData/seedData')
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

<<<<<<< HEAD
const db = mongoose.connection

db.once('open', ()=>{
    mongoose.connection.db.listCollections({name: 'gigs'}).toArray((err, items) => {
        let exist = items.length > 0;  
        console.log('Does gigs collection exist? : ', exist)
          if(exist){
            db.dropCollection("gigs",  (err, result) => {
              if (err) console.log("error trying to delete gigs collection");
            })
          }
          Gig.insertMany(seedGigs)
          .then(() => {
               console.log('inserting documents')
          })
          .catch(err => {
              console.log(err)
          });
    
      })
})

const UserGiger = require('./models/UserGiger');
=======
const UserClient = require('./models/UserClient');
>>>>>>> 2c654a4e45870af8d2583258112fb90181eaa678
const UserPerformer = require('./models/UserPerformer');
const Gig = require('./models/Gig');

module.exports = {UserClient, UserPerformer, Gig};