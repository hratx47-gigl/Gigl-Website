import React from 'react';
import GigBar from './gigbar/GigBar'

const GigList = ({ gigs, removeApply }) => (
  <div>
    {gigs.map((gig) => (<GigBar key={ gig._id } removeApply={removeApply} gig={ gig } />))}
  </div>
)

export default GigList;