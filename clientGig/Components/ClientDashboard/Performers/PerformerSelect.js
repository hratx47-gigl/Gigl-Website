import React from "react";

class PerformerSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: [],
    };
  }

  componentDidMount() {}

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
                  onClick={this.props.remove}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group performer-list">
                  {this.props.applicants.map((item, index) => {
                    var name = item.name.split(" ").join("");
                    return (
                      <li className="list-group-item" key={index}>
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
              <div className="modal-footer">
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
