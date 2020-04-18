import React from "react";
import GigItem from "./ClientGigItem";

class ActiveGigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigName: "Last Wish Raid",
      gigDate: "04/25/2020",
      gigDescription:
        "A super cool really long raid that's like totally hard and not even worth it sometimes but yeah it's fun let's do it",
    };
  }

  render() {
    return (
      <div>
        <ul>
          <h1>Active Gigs </h1>
          <GigItem
            Name={this.state.gigName}
            Date={this.state.gigDate}
            Description={this.state.gigDescription}
          />
        </ul>
      </div>
    );
  }
}

export default ActiveGigs;
