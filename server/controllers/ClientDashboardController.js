const { Gig, UserClient, UserPerformer } = require("../database");

async function getActiveGigs(req, res) {
  const user = req.session.userClient;
  const clientGig = await Gig.find({ owner: user._id });
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
  await newClientGig.save();
  res.json({ success: true });
}

async function getUsername(req, res) {
  const user = req.session.userClient;
  console.log(user.username);
  const clientUsername = await UserClient.findById(user._id);
  res.json({ username: clientUsername.username });
}

async function getPerformerDetails(req, res) {
  console.log("search id = ", req.params);
  const info = await UserPerformer.findById(req.params.id);
  console.log(info);

  res.json({ info: info });
}

module.exports = { getActiveGigs, postGig, getUsername, getPerformerDetails };
