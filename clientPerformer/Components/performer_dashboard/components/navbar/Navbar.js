import React from 'react';
import axios from 'axios';

const Navbar = () => {
    return(
        <div>
        <div className="bg-dark">
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{fontFamily: "Candara", fontSize:"40px"}} href="/">
            <img src="https://i.imgur.com/JWCVUEL.png" className="pr-2" width="50" height="50" alt=""></img>
            Gigl
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="navbar-brand" href="/performer/profile">
                        <img className="pr-1" height="60" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                    </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link text-white pr-3" style={{fontSize:"24px", fontFamily:"Lalezar"}} href="/">Home</a>
                </li>
                <li className="nav-item d-flex align-items-center">
                <a className="nav-link text-white" 
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
                    style={{fontSize:"24px", fontFamily:"Lalezar"}}>
                Log Out</a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
        </div>
    )
}

export default Navbar;