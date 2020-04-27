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
          color: "#E4E6EB",
          border: "1px solid #34ACBC",
          marginBottom: "10px",
          backgroundColor: "#373737",
          borderRadius: "5px",
        }}
        className="list-group-item"
      >
        <div className="row">
          <div className="col-md-10">
            <div className={"d-flex justify-content-right"}>
              {/* <div className={"p-2"}>{this.props.name}</div> */}

              <div className={"p-2"}>{dateFormat(this.props.date)}</div>
            </div>

            <h3 className={"d-flex justify-content-center"}>
              {this.props.event}
            </h3>
            <div>
              <a
                style={{ color: "#34ACBC" }}
                className={"btn btn-link"}
                data-toggle={"collapse"}
                href={`#gig${this.props.index}`}
                aria-expanded={"false"}
                aria-controls={`gig${this.props.index}`}
              >
                See More Details
              </a>
              <div className="collapse" id={`gig${this.props.index}`}>
                <div
                  className="card card-body"
                  style={{ backgroundColor: "#212121" }}
                >
                  Location: {this.props.location} <br />
                  Price:{" $" + this.props.price} <br />
                  Details: {this.props.description}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <PerformerView
              id={this.props.id}
              index={this.props.index}
              applicants={this.props.applicants}
              selectedApplicants={this.props.selectedApplicants}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default GigItem;

const dateFormat = (mongoDate) => {
  var year, month, day;
  year = mongoDate.slice(0, 4);
  month = mongoDate.slice(5, 7);
  day = mongoDate.slice(8, 10);
  return month + "/" + day + "/" + year;
};
