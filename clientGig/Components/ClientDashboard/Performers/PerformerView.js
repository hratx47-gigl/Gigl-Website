import React from "react";
import PerformerSelect from "./PerformerSelect";
import CurPerformers from "./AttachedPerformers";

class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: [
        { name: "Sean Spiesman", checked: false },
        { name: "Matt", checked: false },
        { name: "Jaeson", checked: false },
        { name: "Nick", checked: false },
        { name: "Roy", checked: false },
        { name: "Tyler", checked: false },
        { name: "David", checked: false },
      ],
    };
  }

  onCheckboxChange(item) {
    if (item === document.getElementById(item).id) {
      if (document.getElementById(item).checked === true) {
        document.getElementById(item).setAttribute("checked", false);
        for (var i = 0; i < this.state.applicants.length; i++) {
          if (this.state.applicants[i].name.split(" ").join("") === item) {
            let apps = [...this.state.applicants];
            apps[i].checked = true;
            this.setState({ applicants: apps }, () => {
              console.log(this.state.applicants);
            });
          }
        }
      } else {
        document.getElementById(item).setAttribute("checked", true);
        for (var i = 0; i < this.state.applicants.length; i++) {
          if (this.state.applicants[i].name.split(" ").join("") === item) {
            let apps = [...this.state.applicants];
            apps[i].checked = false;

            this.setState({ applicants: apps }, () => {
              console.log(this.state.applicants);
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <p>Selected Applicants</p>
        <ul className={"list-group"}>
          {this.state.applicants.map((item, index) => {
            return <CurPerformers key={index} item={item} />;
          })}
        </ul>
        <PerformerSelect
          applicants={this.state.applicants}
          checked={this.onCheckboxChange.bind(this)}
        />
      </div>
    );
  }
}

export default PerformerView;
