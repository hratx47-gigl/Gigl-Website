import React from "react";

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
              <a className="nav-link" href="#">
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
