import React from 'react';
import './profile.css'

const Profile = (props)=> {
    return(
        <div className="backgroundImage image-fluid">
        <div className="container-fluid">
        <div style={{height:50, width:"auto"}}></div>
            <div className="row d-flex align-items-end">
                <div className="col-md-3">
                    <div>
                        <a href="/performer/profile">
                            <img className="img-fluid img-thumbnail mb-2" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-end pl-0">
                    <a href="performer/profile" className="text-white pl-4" style={{fontFamily:"Lalezar"}}>
                        <h2>A. Garcia</h2>
                    </a>
                </div>
                <div className="col-md-3 d-flex align-items-end pl-4">
                    <h3 className="text-white mb-0 pb-1" style={{fontFamily:"Lalezar"}}>Austin</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;