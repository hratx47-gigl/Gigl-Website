import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      redirect: false
    };
    this.attemptLogin = this.attemptLogin.bind(this);
    this.apiUrl = props.apiUrl || "";
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  attemptLogin(event) {
    event.preventDefault();
    this.setState({isLoading: true});
    const email = this.emailRef.current.value;
    const password = this.passwordRef.current.value;
    console.log(email, password);
    axios.post(this.apiUrl, {email: email, password: password}).then((resp) => {
      console.log("resp: ", resp);
    }).catch((e) => {
      console.log("error: ", e);
    }).finally(() => {
      this.setState({isLoading: false});
    });
  }

  renderRedirect(){
    if(this.state.redirect) return <Redirect to={"/"} />
  }

  render() {
    return (
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
            <h5 className="card-title text-center">Login to your Account</h5>
            <form onSubmit={this.attemptLogin}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="john.doe@gmail.com"
                  required={true}
                  ref={this.emailRef}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="••••••••"
                  required={true}
                  ref={this.passwordRef}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-block btn-outline-secondary">
                {this.state.isLoading ? (<>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Logging in...
                </>) : "Login"}
                </button>
              </div>
              <div className="mt-2 text-center">
              <div className="dropdown-divider w-100"></div>
                <p>Don't have an Account? 
                  <Link to="/signup"> Sign Up</Link>
                  </p>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
  }
}

export default Login;
