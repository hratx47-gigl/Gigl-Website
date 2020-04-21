import React from 'react';
import GigBar from './gigbar/GigBar'

const GigList = ({ gigs }) => (
  <>
    {gigs.map((gig, index) => (<GigBar key={ index } gig={ gig } />))}
  </>
)

export default GigList;