const Gig = require('../database/models/Gig')

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
    Gig.aggregate([

        {$match : {"applicants": user, "accepted": { "$ne": user}}},
      
        {$lookup:{from: "userclients", localField: "owner", foreignField: "_id", as: "ownerName"}},
        
        {$project:{name:1, location:1, date:1, price:1, description:1, image:1, ownerName:1, numberOfApplicants:{$size:"$applicants"}}},
    
      
      ], (err, results)=>{
        results[1].ownerName = results[1].ownerName[0].username;
        err ? res.status(500).json({error: err}) : res.send(results);
      });
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

  function postApplyToGig(req, res){
    const user = req.session.userPerformer;
    const gigId = req.body.gigId;
    Gig.findOneAndUpdate(
        {_id:gigId},
        {$push : { applicants: user } }
        )
    .then((response)=>{
        res.send(response)
    })
    .catch(err =>{
        res.status(500).json({error: err})
    })
  }

  module.exports = {getAllGigs, getPerformerAcceptedGigs, getPerformerPendingGigs, getPerformerAvailableGigs, postApplyToGig}


