const Gig = require('../database/models/Gig');
const mongoose = require('mongoose');
const UserPerformer = require('../database/models/UserPerformer');

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
  const user = mongoose.Types.ObjectId(req.session.userPerformer._id);
    Gig.aggregate([

        {$match : {"applicants": user, "selectedApplicants": { "$ne": user}}},
      
        {$lookup:{from: "userclients", localField: "owner", foreignField: "_id", as: "ownerName"}},
        
        {$project:{name:1, location:1, date:1, price:1, description:1, image:1, ownerName:1, numberOfApplicants:{$size:"$applicants"}}},
        
        {$sort : {date : -1 }}
      
      ], (err, results)=>{
        results.forEach(result=>{
            result.ownerName = result.ownerName[0] ? result.ownerName[0].username : '';
        });
        console.log(results);
        // results[1].ownerName = results[1].ownerName[0].username;
        err ? res.status(500).json({error: err}) : res.send(results);
      });
}  


    // get gigs for which performer has been accepted
function getPerformerAcceptedGigs(req, res){
  const user = mongoose.Types.ObjectId(req.session.userPerformer._id);
    Gig.aggregate([

        // Gig.find({"accepted": user})
        {$match : {"selectedApplicants": user}},
      
        {$lookup:{from: "userclients", localField: "owner", foreignField: "_id", as: "ownerName"}},
        
        {$project:{name:1, location:1, date:1, price:1, description:1, image:1, ownerName:1, numberOfApplicants:{$size:"$applicants"}}},

        {$sort : {date : -1 }}
      
      ], (err, results)=>{
        results.forEach(result=>{
            result.ownerName = result.ownerName[0] ? result.ownerName[0].username : '';
        });
        // console.log(results);
        err ? res.status(500).json({error: err}) : res.send(results);
      });
    }  
    
  // get gigs for which performer has not applied

  function getPerformerAvailableGigs(req, res){
    const user = mongoose.Types.ObjectId(req.session.userPerformer._id);
    // Gig.find({"applicants": { "$ne": user}})
    
    console.log(user);
    Gig.aggregate([

        {$match : {"applicants": { "$ne": user}}},
      
        {$lookup:{from: "userclients", localField: "owner", foreignField: "_id", as: "ownerName"}},
        
        {$project:{name:1, location:1, date:1, price:1, description:1, image:1, ownerName:1, numberOfApplicants:{$size:"$applicants"}}},
    
        {$sort : {date : -1 }}

      ], (err, results)=>{
        results.forEach(result=>{
            result.ownerName = result.ownerName[0] ? result.ownerName[0].username : '';
        });
        console.log(results);
        if(err) console.log(err);
        err ? res.status(500).json({error: err}) : res.send(results);
      });
  }

  function postApplyToGig(req, res){
    const user = req.session.userPerformer;
    const gigId = req.body.gigId;
    Gig.findOneAndUpdate(
        {_id:gigId},
        {$addToSet : { applicants: user } }
        )
    .then((response)=>{
        res.send(response)
    })
    .catch(err =>{
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

  module.exports = {getAllGigs, getPerformerAcceptedGigs, getPerformerPendingGigs, getPerformerAvailableGigs, getPerformerProfileInfo, putPerformerProfileInfo, postApplyToGig}
