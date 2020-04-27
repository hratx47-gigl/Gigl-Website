const { Gig, UserClient, UserPerformer } = require("../database");
const mongoose = require("mongoose");

async function getActiveGigs(req, res) {
  const user = req.session.userClient;
  const clientGig = await Gig.find({ owner: user._id }).catch((err) => {
    console.log(err);
  });
  res.json({ gigs: clientGig });
}

async function postGig(req, res) {
  const user = req.session.userClient;
  const newClientGig = new Gig({
    name: req.body.name,
    location: req.body.location,
    date: req.body.date,
    price: req.body.price,
    description: req.body.description,
    applicants: [],
    owner: user._id,
  });
  await newClientGig.save().catch((err) => {
    console.log(err);
  });
  res.json({ success: true });
}

async function getUsername(req, res) {
  const user = req.session.userClient;
  console.log(user.username);
  const clientUsername = await UserClient.findById(user._id).catch((err) => {
    console.log(err);
  });
  res.json({ username: clientUsername.username });
}

async function getPerformerDetails(req, res) {
  const info = await UserPerformer.findById(req.params.id).catch((err) => {
    console.log(err);
  });

  res.json({ info: info });
}

async function addPerformerToGig(req, res) {
  console.log("this is params", req.body);
  const newPerformerGig = await Gig.findOneAndUpdate(
    { _id: req.body.gigId },
    {
      $push: { selectedApplicants: mongoose.Types.ObjectId(req.body.perfId) },
    }
  );
  res.json("Added");
  // const performer = await UserPerformer;
}

async function deletePerformerFromGig(req, res) {
  console.log("this is params", req.body);
  const newPerformerGig = await Gig.findOneAndUpdate(
    { _id: req.body.gigId },
    {
      $pull: { selectedApplicants: mongoose.Types.ObjectId(req.body.perfId) },
    }
  );
  res.json("Removed");
}

// async function getAppliedPerformers(req, res) {
//   const appliedPerfomers = await Gig.findById({ _id: req.params.id })
//     .populate("applicants")
//     .populate("selectedApplicants")
//     .exec();
//   const applicants = appliedPerformers.applicants;
//   const selectedApplicants = appliedPerformers.selectedApplicants;
//   const result = [];
//   for(let applicant of applicants){

//   }
//   res.json({ appliedPerfomers: appliedPerfomers.selectedApplicants });
//   console.log("get applied performers route works");
// }

module.exports = {
  getActiveGigs,
  postGig,
  getUsername,
  getPerformerDetails,
  addPerformerToGig,
  deletePerformerFromGig,
};
