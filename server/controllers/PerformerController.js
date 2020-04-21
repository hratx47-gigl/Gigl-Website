const Gig = require('../database/models/Gig')

function getPerformerGigs(req, res){
    console.log('Recieved get gigs request')
    // res.status(200).send('response from get gigs')
    // res.json({data: ['test', 'res', 'data']})
      Gig.find()
      .then(docs =>{
          
          res.send(docs)
      })
      .catch(err => {
          res.status(500).json({error: err})
      })
  }

  module.exports = {getPerformerGigs}