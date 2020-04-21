let seedGigs = []
for(let i = 0; i < 20; i++){
    let gig = {}
    gig.name = 'Gig' + i
    gig.location = 'Austin, Tx'
    gig.dat = new Date(),
    gig.price = Math.ceil( Math.random() * 200)
    gig.description = 'Description for ' + gig.name
    gig.applicants = [],
    gig.owner = 'GigOwner' + i
    seedGigs.push(gig)
}


module.exports = {seedGigs}