import React from "react";
import PerformerSelect from "./PerformerSelect";
import CurPerformers from "./AttachedPerformers";

class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [
        // { name: "Spies Seanman", checked: false },
        // { name: "Matt", checked: false },
        // { name: "Jaeson", checked: false },
        // { name: "Nick", checked: false },
        // { name: "Roy", checked: false },
        // { name: "Tyler", checked: false },
        // { name: "David", checked: false },
      ],
    };
  }

  componentDidMount() {}

  onCheckboxChange(item, gigIndex) {
    if (item + gigIndex === document.getElementById(item + gigIndex).id) {
      if (document.getElementById(item + gigIndex).checked === true) {
        document.getElementById(item + gigIndex).setAttribute("checked", false);
        for (var i = 0; i < this.state.applicants.length; i++) {
          if (this.state.applicants[i].name.split(" ").join("") === item) {
            let apps = [...this.state.applicants];
            apps[i].checked = true;
            this.setState({ applicants: apps });
          }
        }
      } else {
        document.getElementById(item + gigIndex).setAttribute("checked", true);
        for (var i = 0; i < this.state.applicants.length; i++) {
          if (this.state.applicants[i].name.split(" ").join("") === item) {
            let apps = [...this.state.applicants];
            apps[i].checked = false;

            this.setState({ applicants: apps });
          }
        }
      }
    }
  }

  render() {
    if (this.state.applicants.length === 0) {
      return <div>No Applicants yet</div>;
    } else {
      return (
        <div>
          <p>Selected Applicants</p>
          <ul className={"list-group"}>
            {this.state.applicants.map((item, index) => {
              return (
                <CurPerformers
                  key={index}
                  item={item}
                  gigIndex={this.props.index}
                />
              );
            })}
          </ul>
          <PerformerSelect
            applicants={this.state.applicants}
            checked={this.onCheckboxChange.bind(this)}
            gigIndex={this.props.index}
          />
        </div>
      );
    }
  }
}

export default PerformerView;
