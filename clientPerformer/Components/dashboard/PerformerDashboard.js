import React, { Component } from 'react';
import './dashboard.css';
import axios from 'axios';
import Promise from 'bluebird';
import GigList from './components/giglist/GigList';
// import $ from 'jquery';

class PerformerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_criteria: {
        
      },
      gigs: []
    };
    // this.getAllCountyData = this.getAllCountyData.bind(this);
    // this.addAccordianCss = this.test.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/performer/gigs')
    .then(res =>{
      console.log('response data from server for all gigs', res.data)
      if(res.data && res.data.length > 0){
        this.setState({
          gigs: res.data
        })
      }
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

