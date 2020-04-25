import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import GigList from './components/gig_list/GigList';
import Profile from './components/profile/Profile';
import './gig_list.css';
import axios from 'axios';

class PerformerDashboard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            username: '',
            location: '',
            gigView: 'pending',
            upcomingGigs: [],
            availableGigs: [],
            pendingGigs: [],
            serverResponse: ''
        }
    }

    changeGigView(pageView){
        axios.get(`/api/performer/gigs/${pageView}`)
        .then(response=>{
            if (pageView === 'available'){
                this.setState({
                    gigView: pageView,
                    availableGigs: response.data,
                });
            } else {
                this.setState({
                    gigView: pageView,
                    pendingGigs: response.data,
                });
            }
        })
        .catch(error=>{
            console.error(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/performer/profile') //get info specifc to the user
        .then((response) => {
            console.log(response.data);
            this.setState({
                username: response.data.username,
                location: response.data.location
            })
        })
        .catch((error) => {
            console.log(error);
        });

        axios.get('/api/performer/gigs/available')
        .then(response=>{
            console.log('response ', response);
            this.setState({availableGigs: this.state.availableGigs.concat(...response.data)});
        })
        .catch(error=>{
            console.error(error);
        });
        axios.get('/api/performer/gigs/accepted')
        .then(response=>{
            console.log('response ', response);
            this.setState({upcomingGigs: this.state.upcomingGigs.concat(...response.data)});
        })
        .catch(error=>{
            console.error(error);
        });
        axios.get('/api/performer/gigs/pending')
        .then(response=>{
            console.log('response ', response);
            this.setState({pendingGigs: this.state.pendingGigs.concat(...response.data)});
        })
        .catch(error=>{
            console.error(error);
        });
    }

    render() {
        let { gigView, availableGigs, pendingGigs, upcomingGigs, username, location } = this.state;
        return(
            <div>
                <Navbar/>
                <Profile username={username} location={location}/>
                <div className="gig_info container pt-3 my-5">
                    <h3>Your Upcoming Gigs</h3>
                    <div className="container gig_header mb-5" style={{border: '1px solid #34acbc'}}>
                        <div className="mt-3"></div>
                        <GigList gigs={upcomingGigs}/>
                        <div className="pb-1"></div>
                    </div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary btn-info btn-lg blueBackground" onClick={() => {this.changeGigView('pending')}}>
                            <h4>Pending Gigs</h4>
                        </button>
                        <button type="button" className="btn btn-secondary btn-info btn-lg ml-1 blueBackground" onClick={() => {this.changeGigView('available')}}>
                            <h3>Available Gigs</h3>
                        </button>
                    </div>
                    <div className="container gig_header mb-4" style={{border: '1px solid #34acbc'}}>
                        <div className="mt-3"></div>
                        <GigList gigs={ (gigView === 'pending' ? pendingGigs : availableGigs) } />
                    </div>
                </div>
            </div>
        )
    }
}

export default PerformerDashboard;