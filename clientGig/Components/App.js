import React from "react";
import Navbar from "./ClientDashboard/Navbar/ClientNavbar";
import axios from "axios";
// import Test from "../../clientShared/test";
import ActiveGigs from "./ClientDashboard/ActiveGigs/ClientActiveGigs";
import ClientGigModal from "./ClientDashboard/AddGigs/ClientGigModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      currentGigs: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/client/profile/username")
      .then((results) => {
        var user = results.data.username;
        this.setState({ username: user });
      })
      .catch(() => {
        console.log("error");
      });
    this.rerender();
  }

  rerender() {
    axios
      .get("http://localhost:8000/api/client/gigs")
      .then((results) => {
        let activeGigs = results.data.gigs;
        // results.data.gigs[0].applicants = [
        //   "5ea26524bbe82c239433a1f7",
        //   "5ea30c9a35dbb51e444c2141",
        // ]; //change when performer dash sends appropriate data
        this.setState({ currentGigs: activeGigs });
      })
      .catch((err) => {});
  }

  newGigSubmit(newGig) {
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

  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{ padding: "0px", backgroundColor: "#212121" }}
        >
          <Navbar />
          <div
            className="container"
            style={{ backgroundColor: "#212121", height: "100vh" }}
          >
            <h1
              style={{
                paddingTop: "60px",
                color: "#E4E6EB",
              }}
            >
              {this.state.username + "'s Gigs"}
            </h1>
            <ClientGigModal button={this.newGigSubmit.bind(this)} />

            <ActiveGigs gigs={this.state.currentGigs} />
          </div>
        </div>
      </>
    );
  }
}
