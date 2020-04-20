import React from "react";
import PerformerSelect from "./PerformerSelect";
class PerformerView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginTop: "30%" }}>
        <PerformerSelect />
      </div>
    );
  }
}

export default PerformerView;
