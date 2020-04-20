import React from "react";

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      performersList: [
        "Matt Co",
        "Nick Lingrel",
        "Sean Spiesman",
        "Alex Garcia",
      ],
    };
  }

  render() {
    return (
      <>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#performerModal"
          >
            Show Applicants
          </button>
        </div>
        <div
          className="modal fade"
          id="performerModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="performerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="performerModalLabel">
                  Performers
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group performer-list">
                  {this.state.performersList.map((item, index) => {
                    return (
                      <>
                        <li className="list-group-item" key={index}>
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          {item}
                        </li>
                      </>
                    );
                  })}
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
                      this.state.description,
                    ]);
                  }}
                  type="button"
                  className="btn btn-primary"
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
export default PerformerSelect;
