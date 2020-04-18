import React, { Component } from "react";
import Navbar from "./ClientDashboard/Navbar/ClientNavbar";
// import axios from "axios";
// import Test from "../../clientShared/test";
import ActiveGigs from "./ClientDashboard/ActiveGigs/ClientActiveGigs";
import ClientGigModal from "./ClientDashboard/AddGigs/ClientGigModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Something here",
      currentGigs: [
        {
          name: "Matt",
          eventName: "Last Wish Raid",
          date: "04/25/2020",
          location: "Your Moms Basement",
          description:
            "A super cool really long raid that's like totally hard and not even worth it sometimes but yeah it's fun let's do it",
        },
        {
          name: "Stuff",
          eventName: "cool",
          date: "04/20/2020",
          location: "Hell",
          description: "A poopity poppity",
        },
      ],
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {}

  newGigSubmit(newGig) {
    var newObject = {
      name: this.state.username,
      eventName: newGig[0],
      location: newGig[1],
      date: newGig[2],
      description: newGig[3],
    };
    this.setState({
      currentGigs: [...this.state.currentGigs, newObject],
    });
  }

  render() {
    return (
      <>
        <div
          className="container"
          style={{ backgroundColor: " rgba(100, 100, 100)" }}
        >
          <Navbar />

          <h1 style={{ paddingTop: "60px" }}>Client Username</h1>

          <ActiveGigs gigs={this.state.currentGigs} />
          <ClientGigModal button={this.newGigSubmit.bind(this)} />
        </div>
      </>
    );
  }
}
