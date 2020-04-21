const { Gig } = require("../database");

async function getActiveGigs(req, res) {
  const user = req.session.userClient;
  const clientGig = await Gig.find(
    { owner: user._id },
    { projection: { _id: 0 } }
  );
  res.json({ gigs: clientGig });
}

async function postGig(req, res) {
  const user = req.session.userClient;
  const newClientGig = new Gig({
    name: name,
    location: location,
    date: date,
    price: price,
    description: description,
    applicants: [{ type: Schema.Types.ObjectId, ref: "UserPerformer" }],
    owner: { type: Schema.Types.ObjectId, ref: "UserClient" },
  });
  res.json({ newGig: newClientGig });
}

module.exports = { getActiveGigs, postGig };
