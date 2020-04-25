import React from 'react';
import './profile.css'

const Profile = ({username, location})=> {
    return(
        <div className="backgroundImage image-fluid" style={{color: "#E4E6EB"}}>
        <div className="container-fluid">
            <div className="row d-flex align-items-end">
                <div className="col-md-3">
                    <div>
                        <a href="/performer/profile">
                            <img className="img-fluid img-thumbnail mb-2" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-end pl-0">
                    <a href="performer/profile" className="pl-4" style={{color: "#E4E6EB"}}>
                        <h1>{username}</h1>
                    </a>
                </div>
                <div className="col-md-3 d-flex align-items-end pl-4">
                    <h3 className="mb-0 pb-1">{location}</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;