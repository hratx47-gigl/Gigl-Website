import React from "react";
import PerformerSelect from "./PerformerSelect";
class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performerArr: [{ name: "name", id: "id" }],
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-top" style={{ height: "50px" }}>
          <div className="col-sm-4">
            <div>
              <img
                src="https://i.stack.imgur.com/80oZH.jpg"
                style={{ backgroundColor: "red", height: "40px" }}
              />
            </div>
          </div>
          <div className="col-sm-4">hi</div>
          <div className="col-sm-4">hi</div>
        </div>
        <div className="row align-middle" style={{ height: "50px" }}>
          <div className="col-sm-4">hi</div>
          <div className="col-sm-4">hi</div>
          <div className="col-sm-4">hi</div>
        </div>
        <div className="row align-bottom" style={{ height: "50px" }}>
          <div className="col-sm-4">hi</div>
          <div className="col-sm-4">hi</div>
          <div className="col-sm-4">hi</div>
        </div>
        {/* <button>Here's your damn button matt</button> */}
      </div>
    );
  }
}

export default PerformerView;
