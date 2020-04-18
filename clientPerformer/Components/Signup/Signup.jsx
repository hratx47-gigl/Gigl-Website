import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <div className="logo"></div>
        <div>Sign Up</div>
        <div>____</div>
        <div>
          <div>Sign up form placeholder</div>
        </div>
        <div>By registering you confirm you accept the <span><a href="placeholder">Terms and Conditions</a></span> and <span><a href="placeholder">Privacy Policy</a></span></div>
        <div>____</div>
        <div>Already have an account? <span><a href="redirect to login">Log In</a></span></div>
      </div>
    )
  }
}

export default Signup;