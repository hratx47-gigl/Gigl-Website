import React from "react";
import ImageUpload from "./ImageUpload.js";

class ClientGigModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      location: "",
      date: "",
      description: "",
      price: "",
    };
    this.eventInput = this.eventInput.bind(this);
    this.locationInput = this.locationInput.bind(this);
    this.dateInput = this.dateInput.bind(this);
    this.priceInput = this.priceInput.bind(this);
    this.descriptionInput = this.descriptionInput.bind(this);
  }

  eventInput(event) {
    this.setState({ eventName: event.target.value });
    // console.log(event.target.value);
  }

  locationInput(event) {
    this.setState({ location: event.target.value });
    // console.log(event.target.value);
  }

  priceInput(event) {
    if (
      isNaN(parseInt(event.target.value)) &&
      event.target.value.length !== 0
    ) {
      alert("Price must be a numerical value");
    } else {
      this.setState({ price: event.target.value });
    }
  }

  dateInput(event) {
    var dateformat = /((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/;
    var input = event.target.value;

    if (
      input[input.length - 1] !== "/" &&
      typeof parseInt(input[input.length - 1]) !== "number"
    ) {
      alert("1Date only accepts numbers and '/' characters");
    } else {
      if (
        isNaN(parseInt(input[input.length - 1])) &&
        input[input.length - 1] !== "/" &&
        input[input.length - 1] !== undefined
      ) {
        alert("2Date only accepts numbers and '/' characters");
      } else {
        if (event.target.value.length >= 10) {
          if (dateformat.test(event.target.value)) {
            this.setState({
              date: event.target.value,
            });
          } else {
            alert("Date must be in proper format (MM/DD/YYYY)");
          }
        } else {
          this.setState({ date: event.target.value });
        }
      }
    }
  }

  descriptionInput(event) {
    this.setState({
      description: event.target.value,
    });
  }

  submission() {}

  render() {
    return (
      <>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#clientModal"
            style={{
              marginBottom: "10px",
              backgroundColor: "#34ACBC",
              color: "#212121",
            }}
          >
            Create New Gig
          </button>
        </div>
        <div
          className="modal fade"
          id="clientModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="clientModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="clientModalLabel">
                  New Gig
                </h5>
                {/* <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div className="modal-body">
                <div className="form-group">
                  {/* <div className="row"> */}
                  {/* <div className='col-sm-3'></div> */}
                  <label htmlFor="gig-name-input">Name</label>
                  <input
                    id="gig-name-input"
                    className="form-control"
                    onChange={this.eventInput}
                    placeholder="Name..."
                  />
                  {/* </div> */}
                </div>
                <div className="form-group">
                  <label htmlFor="gig-location-input">Location</label>
                  <input
                    id="gig-location-input"
                    className="form-control"
                    onChange={this.locationInput}
                    placeholder="Location..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gig-date-input">Date</label>
                  <input
                    value={this.state.date}
                    id="gig-date-input"
                    className="form-control"
                    onChange={this.dateInput}
                    placeholder="MM/DD/YYYY"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gig-price-input">Price</label>
                  <input
                    id="gig-price-input"
                    value={this.state.price}
                    className="form-control"
                    onChange={this.priceInput}
                    placeholder="Price..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gig-description-input">
                    Event Description
                  </label>
                  <textarea
                    id="gig-description-input"
                    className="form-control"
                    onChange={this.descriptionInput}
                    placeholder="Describe Your Event..."
                  />
                </div>
                <div className="form-group">
                  <ImageUpload />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    this.props.button([
                      this.state.eventName,
                      this.state.location,
                      this.state.date,
                      this.state.price,
                      this.state.description,
                    ]);
                  }}
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientGigModal;
