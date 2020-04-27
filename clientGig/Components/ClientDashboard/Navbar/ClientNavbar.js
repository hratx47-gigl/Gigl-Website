import React from "react";
import axios from "axios";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-header">
            <div className="logo"></div>
            <img
              src="https://i.imgur.com/JWCVUEL.png"
              style={{ maxHeight: "40px", paddingBottom: "10px" }}
              alt="logo"
            ></img>
            <a
              style={{ fontSize: "30px" }}
              className="navbar-brand"
              href="#logo"
            >
              <img
                src="https://i.imgur.com/o1Ky7cy.png"
                height="30"
                width="60"
                alt=""
              ></img>
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#signout"
                onClick={() => {
                  axios
                    .post("/api/client/signout")
                    .then((results) => {
                      // console.log(results);
                      window.location.replace("http://localhost:8000/");
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
