function getActiveGigs(req, res) {
  const user = req.params.userName;
  gigHelper(user, (err, results) => {
    if (err) {
      console.log("error retrieving gig list from database");
      res.status(400).end();
    } else {
      res.send(results);
    }
  });
}

const gigHelper = (user, callback) => {
  const collection = client.db("gigl").collection("gigl");

  collection
    .find({ user: user }, { projection: { _id: 0 } })
    .toArray()
    .then((gigs) => {
      callback(null, gigs);
    })
    .catch((err) => {
      console.log("error pulling games from database" + err);
    });
};
