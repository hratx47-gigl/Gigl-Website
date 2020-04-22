import React from 'react';
import GigBar from './gigbar/GigBar'

const GigList = ({ gigs }) => (
  <div>
    {gigs.map((gig, index) => (<GigBar key={ index } gig={ gig } />))}
  </div>
)

export default GigList;