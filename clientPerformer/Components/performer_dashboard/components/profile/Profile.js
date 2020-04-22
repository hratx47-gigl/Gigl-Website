import React from 'react';

const Profile = (props)=> {
    return(
        <div className="bg-dark">
            {/* <div className="jumbotron jumbotron-fluid bg-dark"> */}
            <div className="container">
                <div className="row py-2">
                    <div className="col-3">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                    </div>
                    <div className="col-6 d-flex align-items-end">
                        <a href="/" className="text-white" style={{fontFamily:"Lalezar", fontSize:"30px"}}>Alex Garcia</a>
                    </div>
                    <div className="col-3 d-flex align-items-end">
                        <h5 className="text-white mb-0 text-center" style={{fontFamily:"Lalezar", fontSize:"30px"}}>Location</h5>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Profile;