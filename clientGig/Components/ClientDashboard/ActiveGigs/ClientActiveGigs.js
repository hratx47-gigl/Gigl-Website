import React from "react";
import GigItem from "./ClientGigItem";
class ActiveGigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.gigs.length > 0) {
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
    } else {
      return (
        <>
          <h1 style={{ color: "#373737" }}> You have no Active Gigs</h1>
        </>
      );
    }
  }
}

export default ActiveGigs;
