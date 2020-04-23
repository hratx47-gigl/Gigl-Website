import React from "react";
import GigItem from "./ClientGigItem";
class ActiveGigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gigArray: [],
    };
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.gigs.map((item, index) => {
            return (
              <GigItem
                key={index}
                index={index}
                price={item.price}
                event={item.name}
                date={item.date}
                location={item.location}
                description={item.description}
                applicants={item.applicants}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ActiveGigs;
