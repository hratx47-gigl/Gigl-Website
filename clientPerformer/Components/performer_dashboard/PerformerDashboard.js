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
            gigView: 'pending',
            upcomingGigs: [
                // {
                // _id: 3,
                // name: 'Rat Party!!!!',
                // location: 'Austin, Tx',
                // price: 1000.59,
                // date: '4/20/2020',
                // owner: {
                //     _id: 1,
                //     username: 'Danielle Kuhn'
                // },
                // applicants: [1,2,3,4],
                // description: 'Master Splinter needs you to bake pizzas',
                // image: '',
            // }
            ],
            availableGigs: [
            //     {
            //     _id: 1,
            //     name: 'Cat Party!!!!',
            //     location: 'Austin, Tx',
            //     price: 1000.59,
            //     date: '4/20/2020',
            //     owner: {
            //         _id: 1,
            //         username: 'Danielle Kuhn'
            //     },
            //     applicants: [1,2,3,4],
            //     description: 'Looking for a cat rangler. Needs to have 5 yrs of experience dealing with domesticated cats.',
            //     image: '',
            // }
            ],
            pendingGigs: [
            //     {
            //     _id: 1,
            //     name: 'Bat Party!',
            //     location: 'Austin, Tx',
            //     price: 1,
            //     date: '4/20/2020',
            //     owner: {
            //         _id: 1,
            //         username: 'Jaeson'
            //     },
            //     applicants: [1,2,3,4],
            //     description: 'Come see the bats fly!',
            //     image: '',
            // },
            // {
            //     _id: 1,
            //     name: 'Bat Party!',
            //     location: 'Austin, Tx',
            //     price: 1,
            //     date: '4/20/2020',
            //     owner: {
            //         _id: 1,
            //         username: 'Jaeson'
            //     },
            //     applicants: [1,2,3,4],
            //     description: 'Come see the bats fly!',
            //     image: '',
            // }
            ],
            serverResponse: ''
        }
    }

    changeGigView(pageView){
        this.setState((oldState) => {
            if (oldState.gigView !== pageView){
                return {gigView: pageView};
            } 
        })
    }

    componentDidMount(){
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
        let { gigView, availableGigs, pendingGigs, upcomingGigs } = this.state;
        return(
            <div>
                <Navbar/>
                <Profile/>
                <div className="gig_info container pt-3 my-5">
                    <h4 >Your Upcoming Gigs</h4>
                    <GigList gigs={upcomingGigs}/>
                        <button className="btn btn-link btn-lg" onClick={() => {this.changeGigView('pending')}}>Pending Gigs</button>
                        <span>/</span>
                        <button className="btn btn-link btn-lg" onClick={() => {this.changeGigView('available')}}>Available Gigs</button>
                    <GigList gigs={ (gigView === 'pending' ? pendingGigs : availableGigs) } />
                </div>
            </div>
        )
    }
}

export default PerformerDashboard;