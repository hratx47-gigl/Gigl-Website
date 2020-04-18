import React, { Component } from "react";
import axios from "axios";
import Test from "../../clientShared/test";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h1>Client Username</h1>
        <Test text={"prop from giger"} />

        <ul>
          {this.state.currentGigs.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
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
