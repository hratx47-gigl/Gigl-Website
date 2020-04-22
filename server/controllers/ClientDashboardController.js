const { Gig } = require("../database");

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
  res.send("post request received");
}

module.exports = { getActiveGigs, postGig };
