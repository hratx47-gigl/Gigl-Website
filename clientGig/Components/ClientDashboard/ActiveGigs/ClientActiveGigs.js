import React from "react";
import GigItem from "./ClientGigItem";
import PerformerView from "../Performers/PerformerView";

class ActiveGigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigArray: [],
    };
  }

  // componentDidMount() {
  //   this.setState({ gigArray: this.props.gigs });
  // }

  render() {
    return (
      <div>
        <ul className="list-group">
          <h1>Active Gigs </h1>
          {this.props.gigs.map((item, index) => {
            return (
              <GigItem
                key={index}
                index={index}
                name={item.name}
                event={item.eventName}
                date={item.date}
                location={item.location}
                description={item.description}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ActiveGigs;
