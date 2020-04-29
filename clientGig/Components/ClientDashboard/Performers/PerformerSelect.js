import React from "react";
import Axios from "axios";

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boolean: true,
      appInfo: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.applicants.length === this.props.appInfo.length) {
      if (this.state.boolean === true)
        this.setState({ appInfo: this.props.appInfo, boolean: false });
    }
  }

  render() {
    if (this.state.appInfo.length !== 0) {
      return (
        <>
          <div>
            <button
              type="button"
              className="btn btn-primary list-group-item justify-content-center d-flex"
              data-toggle="modal"
              data-target={`#performerModal${this.props.gigIndex}`}
              style={{
                backgroundColor: "rgb(52, 172, 188)",
                padding: "5px",
                color: "black",
                borderColor: "#34ACBC",
                width: "100%",
              }}
            >
              Show Applicants
            </button>
          </div>
          <div
            className="modal fade"
            id={`performerModal${this.props.gigIndex}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="performerModalLabel"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ backgroundColor: "#212121" }}
            >
              <div
                className="modal-content"
                style={{ backgroundColor: "#212121" }}
              >
                <div
                  className="modal-header"
                  style={{ border: "1px solid #212121" }}
                >
                  <h5 className="modal-title" id="performerModalLabel">
                    Performers
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={this.props.remove}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body"
                  style={{ backgroundColor: "#212121" }}
                >
                  <ul
                    className="list-group performer-list"
                    style={{
                      backgroundColor: "#212121",
                      border: "1px solid #212121",
                    }}
                  >
                    {this.props.appInfo.map((item, index) => {
                      if (item.checked === undefined) {
                        item.checked = false;
                      }
                      // console.log("this is item", item);
                      var name = item.username.split(" ").join("");
                      return (
                        <li
                          className="list-group-item"
                          style={{
                            backgroundColor: "#212121",
                            border: "1px solid #212121",
                          }}
                          key={index}
                        >
                          <input
                            checked={item.checked}
                            type="checkbox"
                            className="form-check-input"
                            id={name + this.props.gigIndex}
                            onChange={() => {
                              this.props.check(
                                this.props.applicants[index],
                                name,
                                this.props.gigIndex
                              );
                            }}
                          />
                          {name}

                          <div>
                            <a
                              style={{ color: "#34ACBC" }}
                              className={"btn btn-link"}
                              data-toggle={"collapse"}
                              href={`#accord${name + this.props.gigIndex}`}
                              aria-expanded={"false"}
                              aria-controls={`accord${
                                name + this.props.gigIndex
                              }`}
                            >
                              Show Performer Details
                            </a>
                            <div
                              className="collapse"
                              id={`accord${name + this.props.gigIndex}`}
                            >
                              <div
                                className="card card-body"
                                style={{ backgroundColor: "#212121" }}
                              >
                                About: {item.about} <br />
                                Education:{item.education} <br />
                                Experience: {item.experience} <br />
                                Venmo Userame: {item.venmoName} <br />
                                Email: {item.email} <br />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  className="modal-footer"
                  style={{ backgroundColor: "rgb(33,33,33)" }}
                  style={{ border: "1px solid #212121" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    style={{
                      backgroundColor: "#34acbc",
                      color: "black",
                      borderColor: "#34acbc",
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
export default PerformerSelect;
