import React from 'react';
import { getByDisplayValue, getByTitle } from '@testing-library/react';

const GigBar = ({ gig }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
 
 return (
  <div className="allgigs">
    <div className="accordion" ><b>{ gig.title }</b>
      <div className="hamburger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
      <div className="float-right" style={{paddingRight: '10px', paddingTop: '5px'}}>{gig.date}</div>
      <div>{gig.location} | {formatter.format(gig.price)}</div>
    </div>

    <div className="panel">
      {/* gig info  -- inner info that expands */}
      <p></p>
      <div id={gig.client.id}>Client: {gig.client.name}  </div>
      <div>Number of Applicants: {gig.bidCount} </div>
      <div>Description: {gig.description}</div>
      <p></p>
    </div>
  </div>);
}

export default GigBar;