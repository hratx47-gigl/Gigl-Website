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
            gigs: {
                upcoming: [],
                available: [{
                    id: 1,
                    name: 'Cat Party!!!!',
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
                }],
                pending: [{
                    id: 1,
                    name: 'Dog Party!',
                    location: 'Austin, Tx',
                    price: 1,
                    date: '4/20/2020',
                    owner: {
                        _id: 1,
                        username: 'Jaeson'
                    },
                    applicants: [1,2,3,4],
                    description: 'Sweet party for dogs!',
                    image: '',
                }]
            }
        }
    }

    render() {
        let { available, pending } = this.state.gigs;
        return(
            <div>
                <Navbar/>
                <Profile/>
                <div className="gig_info container">
                    <Upcoming/>
                    <div className="btn-group btn-group-lg" role="group" aria-label="Your">
                        <button>Pending Gigs</button>
                        <button>Available Gigs</button>
                    </div>
                    <GigList gigs={ available } />
                    <GigList gigs={ pending } />
                </div>
            </div>
        )
    }
}

export default PerformerDashboard;