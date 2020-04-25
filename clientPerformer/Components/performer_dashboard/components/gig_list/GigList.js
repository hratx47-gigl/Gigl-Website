import React from 'react';
import GigBar from './gigbar/GigBar'

const GigList = ({ gigs }) => (
  <div>
    {gigs.map((gig) => (<GigBar key={ gig._id } gig={ gig } />))}
  </div>
)

export default GigList;