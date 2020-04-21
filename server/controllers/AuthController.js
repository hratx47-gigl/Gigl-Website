

function postGigerLogin(req, res) {

}

function postGigerSignup(req, res) {

}


function postPerformerLogin(req, res) {

}

function postPerformerSignup(req, res) {

}

function getPerformerGigs(req, res){
  console.log(req)
  res.status(200).send('response from get gigs')
    //Gig.find()
}

module.exports = {postGigerLogin, postGigerSignup, postPerformerLogin, postPerformerSignup, getPerformerGigs};