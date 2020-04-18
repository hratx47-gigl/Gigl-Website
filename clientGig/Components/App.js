import React, { Component } from "react";
import Navbar from "./ClientDashboard/ClientNavbar";
// import axios from "axios";
// import Test from "../../clientShared/test";
import ActiveGigs from "./ClientDashboard/ClientActiveGigs";
import ClientGigModal from "./ClientDashboard/ClientGigModal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Something here",
      tabs: ["Home", "Messages", "Logout"],
      currentGigs: [],
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    // axios
    //   .get(this.api)
    //   .then((res) => res.data)
    //   .then((seaCreatures) => {
    //     this.setState({ seaCreatures: seaCreatures.data });
    //   });
  }

  render() {
    return (
      <>
        <div className="container">
          <Navbar />

          <h1 style={{ paddingTop: "60px" }}>Client Username</h1>

          <ActiveGigs />
          <ClientGigModal />
          
        </div>
      </>
    );
  }
}

// Creation
// {name: 'something',
// location: "city",
// date: "something",
// description: "",
// }
