/* eslint-disable no-undef */
import React, { Component } from 'react';
// import GiglImage from './gigl_image/GiglImage';
import ApplyButton from './apply_button/ApplyButton'

class GigBar extends Component {

  constructor(props){
    super(props);
   
    this.state = {
      isExpanded: false,
      applied: false,
    }

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.defaultImage = "https://i.imgur.com/KCeSIDy.png";
    this.applyForGig = this.applyForGig.bind(this);
  }

  applyForGig(){
    this.setState(
      {
        applied: !this.state.applied,
      }
    )
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
    const { gig } = this.props;
    const owner = this.props.gig.owner;
    let bidCount = this.props.gig.applicants.length; 
    
    return (
      <div className="accordion container p-0 mt-3" id={`accordion_${gig._id}`}>
        <div className="card">
          <div className="card-header gig_header" id="headingOne">
            <div className="row ">
              <div className="col-6">
                <b>{gig.name}</b>
                <div>{gig.location} | {this.formatter.format(gig.price)}</div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="float-right">{gig.date}</div>
                <button onclick={this.applyForGig} className={"btn btn-link float-right" + (this.state.isExpanded ? ' change' : '')} type="button" aria-expanded="true" onClick={this.toggleCollapse}>
                  <div className="hamburger">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div id={`gigCollapse${gig.id}`} className={"collapse" + (this.state.isExpanded ? ' show' : '')} aria-labelledby="headingOne" data-parent={`accordion_${gig.id}`}>
            <div className="card-body gig_body">
              <div className="row">
                <div className="col-4">
                  <div class="card">
                    <img src="https://i.imgur.com/KCeSIDy.png" alt="Gigl Event Icon" className="card-img-top"/>
                    <div class="card-body gig_body">
                      <ApplyButton onClick={this.applyForGig} applied={this.state.applied} />
                    </div>
                  </div>
                  
                </div>
                <div className="col-8">
                  <h3>{owner.username}</h3>
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