import React from "react";
import PerformerView from "../Performers/PerformerView";

class GigItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li
        style={{
          border: "2px solid black",
          borderRadius: "15px",
          marginBottom: "10px",
        }}
        className="list-group-item"
      >
        <div className="row">
          <div className="col-md-10">
            <div className={"d-flex justify-content-between"}>
              <div className={"p-2"}>{this.props.name}</div>

              <div className={"p-2"}>{this.props.date}</div>
            </div>

            <h3 className={"d-flex justify-content-center"}>
              {this.props.event}
            </h3>
            <div className={"d-flex justify-content-center"}>
              <div className={"p-2 justify-content-center"}></div>
            </div>
            <div className={"d-flex justify-content-center"}>
              <div className={"p-2"}>{this.props.description}</div>
            </div>

            <div>
              <a
                className={"btn btn-link"}
                data-toggle={"collapse"}
                href={`#gig${this.props.index}`}
                aria-expanded={"false"}
                aria-controls={`gig${this.props.index}`}
              >
                See More Details
              </a>
              <div className="collapse" id={`gig${this.props.index}`}>
                <div className="card card-body">{this.props.location}</div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <PerformerView />
          </div>
        </div>
      </li>
    );
  }
}

export default GigItem;
