import React from "react";

const AttachedPerformers = (person) => {
  console.log(person.item);
  if (person.item.checked) {
    return (
      <li
        style={{ padding: "1px", backgroundColor: "rgb(33,33,33)" }}
        className={"list-group-item justify-content-center d-flex"}
      >
        {person.item.username}
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

export default AttachedPerformers;
