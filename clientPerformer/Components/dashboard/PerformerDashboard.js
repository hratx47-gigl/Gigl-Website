import React, { Component } from 'react';
import './dashboard.css';
import Axios from 'axios';
import Promise from 'bluebird';
import GigList from './components/giglist/GigList';
import NavBar from './components/NavBar'
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

  addAccordianCss(){
    var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        console.log(i)
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
          this.classList.toggle("change"); 
        });
      }
  }

  componentDidMount(){
    // this.getAllCountyData((error, results) => {
    //   if (error) {
    //     console.log(error)
    //   } else {
    //     this.setState ({
    //       schools: results
    //     });
        this.addAccordianCss();
    //   }
    // })
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

