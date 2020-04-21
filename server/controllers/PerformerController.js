const Gig = require('../database/models/Gig')

function getPerformerGigs(req, res){
    console.log('Controller handling get gigs request')
    // res.status(200).send('response from get gigs')
    res.json({data: ['test', 'res', 'data']})
    //   Gig.find()
    //   .then(docs =>{
    //       console.log(docs)
    //       res.json({data : docs})
    //   })
    //   .catch(err => {
    //       res.status(500).json({error: err})
    //   })
  }

  module.exports = {getPerformerGigs}