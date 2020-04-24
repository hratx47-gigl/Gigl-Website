const Gig = require('../database/models/Gig')
const UserPerformer = require('../database/models/UserPerformer')

function getAllGigs(req, res){
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

  function getPerformerProfileInfo(req, res){
    const user = req.session.userPerformer;
    UserPerformer.findById( user._id, "about location education experience username").exec()
    .then(docs => {
        res.json(docs)
    })
    .catch(err => {
       
        res.status(500).json({error : err})
    })

  }

  function putPerformerProfileInfo(req, res){
    const user = req.session.userPerformer;
    // console.log( 'req.body.params on put request', req.body.params)
    let field = req.body.params.edit
    let newText = req.body.params[field]
  
    
      UserPerformer.findByIdAndUpdate( user._id , { [field] : newText} ).exec()
      .then(result => {
        // console.log('result', result)
        res.json(result)
      })
      .catch(err => {
          console.log('err',err)
          res.status(500).json(err)
      })
    
  }

  module.exports = {getAllGigs, getPerformerAcceptedGigs, getPerformerPendingGigs, getPerformerAvailableGigs, getPerformerProfileInfo, putPerformerProfileInfo}