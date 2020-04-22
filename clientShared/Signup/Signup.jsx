import React from 'react';
import SignupForm from './SignupForm.jsx';
import {Link} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <div className="container-fluid d-flex align-items-center justify-content-center bg-dark" style={{minHeight:"100vh", fontFamily: "optima"}}>
        <div className="card w-50">
          <div className="card-body">
            <div className="container">
              <div className="row">
              <div className="offset-md-2"></div>
                <div className="col-4 d-flex align-items-center">
                  <img src="https://i.imgur.com/JWCVUEL.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-4 d-flex align-items-center">
                  <h3>Gigl</h3>
                </div>
                <div className="offset-md-2"></div>
              </div>
            </div>
            <h5 className="card-title text-center">Sign up as {this.props.userType}</h5>
            <div className="dropdown-divider w-100"></div>
            <div className="justify-content-center">
              <SignupForm userType={this.props.userType} apiUrl={this.props.apiUrl} />
            </div>
            <div className="d-flex align-items-center text-center flex-column">
            <div >By registering you confirm you accept the <span><a href="placeholder">Terms and Conditions</a></span> and <span><a href="placeholder">Privacy Policy</a></span></div>
            <div className="dropdown-divider w-100"></div>
            <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Signup;
/*
<div className="container-fluid d-flex align-items-center justify-content-center bg-dark" style={{minHeight:"100vh", fontFamily: "optima"}}>
        <div className="card w-50">
          <div className="card-body">
            <div className="container">
              <div className="row">
              <div className="offset-md-2"></div>
                <div className="col-md-4 d-flex align-items-center">
                  <img src="https://files.slack.com/files-pri/T2SVC7RB3-F0123HXL2LS/gigl_logo_unicolor.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <h3>Gigl</h3>
                </div>
                <div className="offset-md-2"></div>
              </div>
            </div>
            <h5 className="card-title text-center">Sign Up</h5>
          </div>
        </div>
        </div>
        */