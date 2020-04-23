import React from 'react';
import './profile.css'

const Profile = (props)=> {
    return(
        <div className="container-fluid">
            <div className="row backgroundImage image-fluid">
                {/* <img className="img-fluid" src="https://i.imgur.com/zPgoYhe.png" alt=""></img> */}
                <div className="col-3">
                    <div className="pl-4">
                        <img className="img-fluid img-thumbnail over-img" src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt=""></img>
                        {/* <img className="over-img" src="https://img.icons8.com/ultraviolet/2x/edit-image.png" alt=""></img> */}
                    </div>
                </div>
                <div className="col-6 d-flex align-items-end pl-0">
                    <a href="performer/profile" className="text-white" style={{fontFamily:"Lalezar", fontSize:"30px"}}>
                        <h5>Alex Garcia</h5>
                    </a>
                </div>
                <div className="col-3 d-flex align-items-end">
                    <h5 className="text-white mb-0 pb-1" style={{fontFamily:"Lalezar", fontSize:"30px"}}>Austin</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile;