import React from 'react';
// import navbar from './navbar.css';

const Navbar = (prop) => {
    return(
        <div>
        <div className="bg-dark">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{fontFamily: "Candara", fontSize:"40px"}} href="/">Gigl
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link text-white" style={{fontSize:"24px", fonFamily:"Lalezar"}} href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-white" style={{fontSize:"24px", fonFamily:"Lalezar"}} href="/">Log Out</a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        </div>
    )
}

export default Navbar;