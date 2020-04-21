import React from "react";
import PerformerView from "./PerformerView";

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: [],
    };
  }

  componentDidMount() {}

  // onCheckboxChange(item) {
  //   if (item === document.getElementById(item).id) {
  //     if (document.getElementById(item).checked === true) {
  //       document.getElementById(item).setAttribute("checked", false);
  //     } else {
  //       document.getElementById(item).setAttribute("checked", true);
  //     }
  //   }
  // }

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
                  {this.props.applicants.map((item, index) => {
                    item = item.name.split(" ").join("");
                    return (
                      <li className="list-group-item" key={index}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={item + this.props.gigIndex}
                          onChange={() => {
                            this.props.checked(item, this.props.gigIndex);
                          }}
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  className="btn btn-secondary"
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
