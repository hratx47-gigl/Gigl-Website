/* eslint-disable no-undef */
import React, { Component } from 'react';

class GigBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      isExpanded: false,
    }

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState((oldState) => {
      if (oldState.isExpanded){
        return {isExpanded: false};
      } else {
        return {isExpanded: true};
      }
    })
  }

  render(){
    const { gig, index } = this.props;
    const owner = this.props.gig.owner;
    let bidCount = this.props.gig.applicants.length; 
    
    return (
        <div className="accordion container p-0 mt-3" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <div className="row">
                <div className="col-6">
                  <b>{gig.name}</b>
                  <div>{gig.location} | {this.formatter.format(gig.price)}</div>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="float-right">{gig.date}</div>
                  <button className={"btn btn-link float-right" + (this.state.isExpanded ? ' change' : '')} type="button" aria-expanded="true" onClick={this.toggleCollapse}>
                    <div className="hamburger">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
  
            <div id={`gigCollapse${index}`} className={"collapse" + (this.state.isExpanded ? ' show' : '')} aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                <div id={owner._id}>Client: {gig.owner.username} </div>
                <div>Number of Applicants: {bidCount} </div>
                <div>Description: {gig.description}</div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default GigBar;