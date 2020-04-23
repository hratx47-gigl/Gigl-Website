import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import GigList from './components/gig_list/GigList';
import Profile from './components/profile/Profile';
import Upcoming from './components/upcoming_gigs/Upcoming'
import './gig_list.css';

class PerformerDashboard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            gigs: [{
                name: 'Cat Party!',
                location: 'Austin, Tx',
                price: 1000.59,
                date: '4/20/2020',
                owner: {
                    _id: 1,
                    username: 'Danielle Kuhn'
                },
                applicants: [1,2,3,4],
                description: 'Looking for a cat rangler. Needs to have 5 yrs of experience dealing with domesticated cats.',
                image: '',
            },
            {
                name: 'Cat Party!',
                location: 'Austin, Tx',
                price: 1000.59,
                date: '4/20/2020',
                owner: {
                    _id: 1,
                    username: 'Danielle Kuhn'
                },
                applicants: [1,2,3,4],
                description: 'Looking for a cat rangler. Needs to have 5 yrs of experience dealing with domesticated cats.',
                image: '',
            }]
        }
    }

    render() {
        let { gigs } = this.state;
        return(
            <div>
                <Navbar/>
                <Profile/>
                <Upcoming/>
                <div className="container mt-4">
                    <h5>Available Gigs</h5>
                    <div className="btn-group btn-group-lg" role="group" aria-label="Your">
                        <button>Pending Gigs</button>
                        <button>Available Gigs</button>
                    </div>
                </div>
                <GigList gigs={ gigs } />
            </div>
        )
    }
}

export default PerformerDashboard;