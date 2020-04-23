import React from "react";
import Navbar from "./ClientDashboard/Navbar/ClientNavbar";
import axios from "axios";
// import Test from "../../clientShared/test";
import ActiveGigs from "./ClientDashboard/ActiveGigs/ClientActiveGigs";
import ClientGigModal from "./ClientDashboard/AddGigs/ClientGigModal";
import { Redirect, Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      username: "Jaeson",
      currentGigs: [],
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    this.rerender();
  }

  rerender() {
    axios
      .get("http://localhost:8000/api/client/gigs")
      .then((data) => {
        let activeGigs = data.data.gigs;
        // console.log(activeGigs);
        this.setState({ currentGigs: activeGigs });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  newGigSubmit(newGig) {
    console.log(newGig);
    var newObject = {
      name: newGig[0],
      location: newGig[1],
      date: newGig[2],
      price: parseInt(newGig[3]),
      description: newGig[4],
      // applicants: [],
    };
    if (isNaN(parseInt(newObject.price))) {
      alert("Price must be a number");
    } else {
      axios
        .post("http://localhost:8000/api/client/addgig", newObject)
        .then((response) => {
          this.rerender();
        })
        .catch((error) => {
          console.log("there was an error" + error);
        });
    }
  }

  logOut() {
    console.log("logout");
    this.setState({ redirect: true }, () => {
      window.location.replace("http://localhost:8000/");
    });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;
    else {
      return (
        <>
          <Navbar logOut={this.logOut.bind(this)} />
          <div
            className="container"
            style={{ backgroundColor: " rgba(100, 100, 100)" }}
          >
            <h1 style={{ paddingTop: "60px" }}>
              {this.state.username + "'s Gigs"}
            </h1>

            <ActiveGigs gigs={this.state.currentGigs} />
            <ClientGigModal button={this.newGigSubmit.bind(this)} />
          </div>
        </>
      );
    }
  }
}
