import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="email" required></input>
        </label>
        <label>
          <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" required></input>
        </label>
        <label>
          <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required></input>
        </label>
        <label>
          <input type="password" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm Password" required></input>
        </label>
        <input className="shiny joinButton" type="submit" value="Join Gigl" />
      </form>
    )
  }
}

export default SignupForm;