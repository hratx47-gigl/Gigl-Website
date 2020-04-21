import React from "react";

const CurPerformers = (person) => {
  if (person.item.checked) {
    return (
      <li style={{ padding: "1px" }} className={"list-group-item"}>
        {person.item.name}
      </li>
    );
  } else {
    return null;
  }
};

export default CurPerformers;
