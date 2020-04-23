import React from "react";

const CurPerformers = (person) => {
  if (person.item.checked) {
    return (
      <li style={{ padding: "1px" }} className={"list-group-item"}>
        {person.item.name}
      </li>
      // Once we have venmo information from the user, we can then render this
      // <li style={{ padding: "1px" }} className={"list-group-item"}>
      //   {person.item.venmo}
      // </li>
    );
  } else {
    return null;
  }
};

export default CurPerformers;
