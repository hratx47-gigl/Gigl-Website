import React from "react";
import PerformerSelect from "./PerformerSelect";
import AttachedPerformers from "./AttachedPerformers";
import Axios from "axios";

class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedApplicants: [], appInfo: [] };
  }

  componentDidMount() {
    for (var i = 0; i < this.props.applicants.length; i++) {
      Axios.get(
        `https://hratx47-gigl.herokuapp.com/api/client/performerinfo/${this.props.applicants[i]}`
      )
        .then((results) => {
          var user = results.data.info.username.split(" ").join("");
          var gigIndex = this.props.index;
          if (document.getElementById(user + gigIndex)) {
            document
              .getElementById(user + gigIndex)
              .setAttribute("checked", true);
          }
          for (var j = 0; j < this.props.selectedApplicants.length; j++) {
            if (results.data.info._id === this.props.selectedApplicants[j]) {
              results.data.info.checked = true;
            }
          }
          this.setState({
            appInfo: [...this.state.appInfo, results.data.info],
          });
          this.setState((state) => {
            return {
              selectedApplicants: [...state.selectedApplicants, user],
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.setState({ sApp: this.state.selectedApplicants }, () => {
      // console.log(this.state.sApp);
    });
    //need to get applied performers names from DB using
  }

  onCheckboxChange(id, item, gigIndex) {
    if (item + gigIndex === document.getElementById(item + gigIndex).id) {
      if (document.getElementById(item + gigIndex).checked === true) {
        Axios.put(`https://hratx47-gigl.herokuapp.com/api/client/selectedperformer/`, {
          perfId: id,
          gigId: this.props.id,
        }).then((result) => {
          var newState = this.state.appInfo;
          for (var i = 0; i < this.state.appInfo.length; i++) {
            if (item === this.state.appInfo[i].username.split(" ").join()) {
              if (this.state.appInfo[i].checked === false) {
                newState[i].checked = true;
              }
              this.setState({ appInfo: newState });
            }
          }
        });
      }
      if (document.getElementById(item + gigIndex).checked === false) {
        Axios.put(`https://hratx47-gigl.herokuapp.com/api/client/deleteperformer/`, {
          perfId: id,
          gigId: this.props.id,
        }).then((result) => {
          var newState = this.state.appInfo;
          for (var i = 0; i < this.state.appInfo.length; i++) {
            if (item === this.state.appInfo[i].username.split(" ").join()) {
              if (this.state.appInfo[i].checked === true) {
                newState[i].checked = false;
              }
              this.setState({ appInfo: newState });
            }
          }
        });
      }
    }
  }

  render() {
    if (this.props.applicants.length === 0) {
      return <div>No Applicants yet</div>;
    } else {
      return (
        <div>
          <p
            className="justify-content-center d-flex"
            style={{ margin: "0px" }}
            
          >
            Selected Applicants
          </p>
          <ul className={"list-group "} style={{ marginBottom: "3px" }}>
            {this.state.appInfo.map((item, index) => {
              return (
                <AttachedPerformers
                  key={index}
                  item={item}
                  gigIndex={this.props.index}
                />
              );
            })}
          </ul>
          <PerformerSelect
            appInfo={this.state.appInfo}
            applicants={this.props.applicants}
            selectedApplicants={this.state.sApp}
            check={this.onCheckboxChange.bind(this)}
            gigIndex={this.props.index}
          />
        </div>
      );
    }
  }
}

export default PerformerView;
