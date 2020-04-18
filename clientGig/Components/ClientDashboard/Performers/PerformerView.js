import React from "react";

class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Hi!</h1>

        <div>
          <button>See Performer Bids</button>
        </div>
      </div>
    );
  }
}

export default PerformerView;
