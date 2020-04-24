import React from "react";
import Axios from "axios";

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: [this.props.applicants],
      appInfo: [],
    };
  }

  componentDidMount() {
    for (var i = 0; i < this.props.applicants.length; i++) {
      Axios.get(
        `http://localhost:8000/api/client/performerinfo/${this.props.applicants[i]}`
      )
        .then((results) => {
          this.setState({
            appInfo: [...this.state.appInfo, results.data.info],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#performerModal${this.props.gigIndex}`}
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
          <div className="modal-dialog" role="document">
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
                  {this.state.appInfo.map((item, index) => {
                    console.log(item);
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
                            this.props.checked(name, this.props.gigIndex);
                          }}
                        />
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                className="modal-footer"
                style={{ border: "1px solid #212121" }}
              >
                <button
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
export default PerformerSelect;
