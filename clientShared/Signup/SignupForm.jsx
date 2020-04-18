import React from 'react';
import {Redirect} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      redirect: false
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
    // axios get request
      // check username (get request to performers users table in db)
        // if exists
          // display message to the user
      // check password and confirmpassword to ensure they match
        // if not
          // display message to user
      // if both above functions return true
        // POST request using axios
          // params
            // email
            // username
            // hashed password
        // then - display message in pop up(modal? alert?) 
          // when confirmed by user - redirect to landing page
        // handle error if error
        console.log('submitted');
  return setTimeout(()=>{console.log('redirect'); this.setState({redirect:true}) }, 3000); //placeholder until backend running
  }

  renderRedirect(){
    if(this.state.redirect) return <Redirect to={"/"} />
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="email" required></input>
        </label>
        <br />
        <label>
          <input name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" required></input>
        </label>
        <br />
        <label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required></input>
        </label>
        <br />
        <label>
          <input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" required></input>
        </label>
        <br />
        <input className="shiny joinButton" type="submit" value="Join Gigl" />
      </form>
      </div>
    )
  }
}

export default SignupForm;