import React from 'react';
import axios from 'axios';

const Navbar = () => {
    return(
        <div>
        <div className="bg-dark" style={{color: "#E4E6EB"}}>
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{fontSize:"40px"}} href="/">
            <img src="https://i.imgur.com/JWCVUEL.png" className="pr-2" width="50" height="50" alt=""></img>
            <img src="https://i.imgur.com/wigrSrK.png" height="50" alt=""></img>
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto d-flex align-items-center">
                <li className="nav-item">
                    <div>
                    <a className="navbar-brand" href="/performer/profile">
                        <img className="rounded-circle" height="50" width="50" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                    </a>
                    </div>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link pr-2" style={{fontSize:"24px", color:"#E4E6EB"}} href="/">Home</a>
                </li>
                <li className="nav-item d-flex align-items-center">
                <a className="nav-link" 
                    href="#signout"
                    onClick={() => {
                    axios
                        .post("/api/performer/signout")
                        .then((results) => {
                        console.log(results);
                        window.location.replace("http://localhost:8000")
                        })
                        .catch((error) => {
                        console.log(error);
                        }); //may need to redirect
                    }}
                    style={{fontSize:"24px", color:"#E4E6EB"}}>
                Log&nbsp;Out</a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        </div>
    )
}

export default Navbar;