const mongoose = require('mongoose')

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




let seedGigs = []
for(let i = 0; i < 20; i++){
    let gig = {}
    gig.name = 'Gig' + i
    gig.location = 'Austin, Tx'
    gig.date = new Date(),
    gig.price = Math.ceil( Math.random() * 200)
    gig.description = 'Description for ' + gig.name
    gig.applicants = [i],
    gig.owner = {username : ('Owner' + i), _id: i},
    seedGigs.push(gig)
}


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



