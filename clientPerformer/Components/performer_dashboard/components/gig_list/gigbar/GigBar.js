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
              <div className="row">
                <div className="col-4">
                  <div class="card">
                    <img src="https://images.unsplash.com/photo-1566927467984-6332be7377d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Gigl Event Icon" className="card-img-top"/>
                    <div class="card-body">
                      {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                      <button type="button" class="btn btn-dark btn-lg btn-block">Apply</button>
                    </div>
                  </div>
                  
                </div>
                <div className="col-8">
                  <h3 id={owner._id}>{owner.username}</h3>
                  <div>Number of Applicants: {bidCount} </div>
                  <div>Description: {gig.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GigBar;