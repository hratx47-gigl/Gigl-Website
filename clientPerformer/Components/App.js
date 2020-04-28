import React, { Component } from 'react';
import axios from 'axios';
import Test from '../../clientShared/test';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    this.api = `https://hratx47-gigl.herokuapp.com/api/example`;
  }
  componentDidMount() {
    axios.get(this.api).then((res) => res.data).then(seaCreatures => {
      this.setState({ seaCreatures: seaCreatures.data });
    })
  }

  render() {
    return (
      <>
        <h1>Welcome to Blue Ocean! Performer</h1>
        <Test text={"prop from performer"}/>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
          ))}
        </ul>
      </>
    );
  }
}
