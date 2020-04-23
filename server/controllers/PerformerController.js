const Gig = require('../database/models/Gig')

<<<<<<< HEAD
function getAllGigs(req, res){
    console.log('Recieved get gigs request')
=======
function getPerformerGigs(req, res){
    console.log('Controller handling get gigs request')
>>>>>>> 8eb00885f655b25fc30dbdc5323bf315c324d22a
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

  // get gigs for which performer has applied but not been accepted
function getPerformerPendingGigs(req, res){
    const user = req.session.userPerformer;
    Gig.find({"applicants": user, "accepted": { "$ne": user}})
    .then(docs =>{
        
    res.send(docs)
    })
    .catch(err => {
    res.status(500).json({error: err})
    })
}  


    // get gigs for which performer has been accepted
function getPerformerAcceptedGigs(req, res){
    const user = req.session.userPerformer;
    Gig.find({"accepted": user})
    .then(docs =>{
        
        res.send(docs)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
    }  
    
  // get gigs for which performer has not applied

  function getPerformerAvailableGigs(req, res){
    const user = req.session.userPerformer;
    Gig.find({"applicants": { "$ne": user}})
    .then(docs =>{
        
      res.send(docs)
  })
  .catch(err => {
      res.status(500).json({error: err})
  })
  }   

  module.exports = {getAllGigs, getPerformerAcceptedGigs, getPerformerPendingGigs, getPerformerAvailableGigs}