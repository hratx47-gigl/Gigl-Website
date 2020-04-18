import React from "react";

function GigItem({ Name, Date, Description }) {
  return (
    <li style={{ border: "2px solid black", borderRadius: "15px" }}>
      <section className={"container-fluid"}>
        <div className={"d-flex justify-content-between"}>
          <div className={"p-2"}>{Name}</div>

          <div className={"p-2"}>{Date}</div>
        </div>

        <div className={"d-flex justify-content-center"}>
          <div className={"p-2 justify-content-center"}>Description</div>
        </div>

        <div className={"d-flex justify-content-center"}>
          <div className={"p-2"}>{Description}</div>
        </div>

        <div>Performers</div>
      </section>
    </li>
  );
}

export default GigItem;
