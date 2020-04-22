import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      redirect: false,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword){
      // check password and confirmpassword to ensure they match
       // if not
         // display message to user
      this.postSignup(()=>{this.setState({redirect:true})});
    } else {
      this.setState({error: "passwords don't match"});
      // console.log("passwords don't match");
    }
    // return setTimeout(()=>{console.log('redirect'); this.setState({redirect:true}) }, 3000); //placeholder until backend running
  }
  
  postSignup(cb){
    // axios request
    axios.post(this.props.apiUrl,
      {
        email:this.state.email,
        username:this.state.username,
        password:this.state.password 
      }
      ).then(response=>{
        console.log(response);
        if(response.data.successful){
          cb();
        } else {
          // console.log(response.data.error);
          this.setState({error:response.data.error})
        }
      })
      // if both above functions return true
        // POST request using axios
          // params
            // email
            // username
            // hashed password
        // then - display message in pop up(modal? alert?) 
          // when confirmed by user - redirect to landing page
        // handle error if error
        // console.log('submitted');

  }

  renderRedirect(){
    if(this.state.redirect) return <Redirect to={"/"} />
  }

  render() {
    return (
      <div className="text-center">
        {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          {/* <label className="form-control">E-mail</label> */}
          <input name="email" type="text" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="john.doe@gmail.com" required></input>
        </div>
        <div className="form-group">
        {/* <label className="form-control">Username</label> */}
          <input name="username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange} placeholder="johndoe47" required></input>
        </div>
        <div className="form-group">
        {/* <label className="form-control">Password</label> */}
          <input name="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="••••••••" required></input>
        </div>
        <div className="form-group">
        {/* <label className="form-control">Confirm Password</label> */}
          <input name="confirmPassword" type="password" className="form-control" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" required></input>
        </div>
        <div className="d-flex align-items-center red">
          {this.state.error}
        </div>
        <input className="btn btn-outline-secondary shiny joinButton" type="submit" value="Join Gigl" />
      </form>
      </div>
    )
  }
}

export default SignupForm;