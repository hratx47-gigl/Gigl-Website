import React from "react";
import axios from "axios";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-header">
            <a style={{ fontSize: "30px" }} className="navbar-brand" href="#">
              NavBar
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  axios
                    .post("/api/client/signout")
                    .then((results) => {
                      console.log(results);
                    })
                    .catch((error) => {
                      console.log(error);
                    }); //may need to redirect
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
