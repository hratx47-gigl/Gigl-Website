const { Gig } = require("../database");

async function getActiveGigs(req, res) {
  const user = req.session.userClient;
  const clientGig = await Gig.find(
    { owner: user._id },
    { projection: { _id: 0 } }
  );
  res.json({ gigs: clientGig });
}

module.exports = { getActiveGigs };
