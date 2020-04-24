import React from 'react';
import GigBar from './gigbar/GigBar'

const GigList = ({ gigs }) => (
  <div className="pb-5">
    {gigs.map((gig, index) => (<GigBar key={ index } gig={ gig } />))}
  </div>
)

export default GigList;