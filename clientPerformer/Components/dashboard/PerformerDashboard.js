import React, { Component } from 'react';
import './dashboard.css';
import Axios from 'axios';
import Promise from 'bluebird';
import GigList from './components/giglist/GigList';
// import $ from 'jquery';

class PerformerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_criteria: {
        
      },
      gigs: [{
        title: 'Big Clown Party Down',
        description: 'clown party', 
        location: 'Round Rock', 
        date: '4/18/2020', 
        client: {
          id: 1,
          name: 'Nick'
        },
        bidCount: 10, 
        price: 100,
      },
      {
        title: 'Bigger Clown Party Down',
        description: `A place to clown people ;)`, 
        location: 'Round Rock', 
        date: '4/18/2020', 
        client: {
          id: 1,
          name: 'Nick'
        },
        bidCount: 1, 
        price: 1000,
      }],
    };
    // this.getAllCountyData = this.getAllCountyData.bind(this);
    // this.addAccordianCss = this.test.bind(this)
  }

  componentDidMount(){
    Axios.get('http:localhost:8000/api/performer/gigs')
    .then(res => {
      console.log('response data from server for all gigs', res.data)
      // this.setState({
      //   gig: res.data
      // })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // getAllCountyData(callback){
  //   const getSchoolData = Axios.get('http://localhost:3000/TX/HHSC/DaycareAndResidentialOperationsData/', 
  //   {
  //     params: {
  //       county: 'WILLIAMSON',
  //       opperation_id: '1137191',
  //       operation_number: '1534236',
  //       operation_name: 'Daily Bread Christian Learning Center'
  //     }
  //   });
  //   Promise.all([getSchoolData])
  //     .then(results => {
  //       callback(null, results[0].data);
  //     })
  //     .catch(error => callback(error, null));
  // }

  render(){
    return (
      <>
        <div className="ribbon"></div>
        <GigList gigs={ this.state.gigs } />
      </>
    );
  }
}

export default PerformerDashboard;

