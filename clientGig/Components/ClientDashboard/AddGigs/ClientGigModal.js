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
      event.targe;
    } else {
      this.setState({ price: event.target.value });
    }
  }

  dateInput(event) {
    this.setState({
      date: event.target.value,
    });
    // console.log(event.target.value);
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
                <ul className="list-group">
                  <li className="list-group-item">
                    <input onChange={this.eventInput} placeholder="Name..." />
                  </li>
                  <li className="list-group-item">
                    <input
                      onChange={this.locationInput}
                      placeholder="Location..."
                    />
                  </li>
                  <li className="list-group-item">
                    <input onChange={this.dateInput} placeholder="Date..." />
                  </li>
                  <li className="list-group-item">
                    <input
                      value={this.state.price}
                      onChange={this.priceInput}
                      placeholder="Price..."
                    />
                  </li>
                  <li className="list-group-item">
                    <textarea
                      onChange={this.descriptionInput}
                      placeholder="Describe Your Event..."
                    />
                  </li>
                  Upload Image <ImageUpload />
                </ul>
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
