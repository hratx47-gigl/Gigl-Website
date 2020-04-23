import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      redirect: false,
      error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.apiUrl = props.apiUrl || "";
    this.emailRef = React.createRef();
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true , error: ""});
    const email = this.emailRef.current.value;
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const confirmPassword = this.confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      this.setState({ error: "Passwords do not match", isLoading: false });
      return;
    }
    axios
      .post(this.apiUrl, {
        email: email,
        username: username,
        password: password,
      })
      .then((resp) => {
        console.log("resp: ", resp);

        this.setState({error: "", redirect: true, isLoading: false});
      })
      .catch((e) => {
        //display message in pop up(modal? alert?)
        console.log("error: ", e);
        this.setState({ isLoading: false });
      });
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
    // then -
    // when confirmed by user - redirect to landing page
    // handle error if error
    console.log("submitted");
    return setTimeout(() => {
      console.log("redirect");
      this.setState({ redirect: true });
    }, 3000); //placeholder until backend running
  }

  renderRedirect() {
    if (this.state.redirect) return <Redirect to={"/"} />;
  }

  render() {
    return (
      <div>
        <div
          className="container-fluid d-flex align-items-center justify-content-center bg-dark"
          style={{ minHeight: "100vh", fontFamily: "optima" }}
        >
          <div className="card w-50">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="offset-md-2"></div>
                  <div className="col-4 d-flex align-items-center">
                    <img
                      src="https://i.imgur.com/JWCVUEL.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 d-flex align-items-center">
                    <h3>Gigl</h3>
                  </div>
                  <div className="offset-md-2"></div>
                </div>
              </div>
              <h5 className="card-title text-center">Sign Up</h5>
              <div className="dropdown-divider w-100"></div>
              {this.renderRedirect()}
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="signup-email">E-mail</label>
                      <input
                        id="signup-email"
                        ref={this.emailRef}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="john.doe@gmail.com"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-username">Username</label>
                      <input
                        id="signup-username"
                        ref={this.usernameRef}
                        name="username"
                        type="text"
                        className="form-control"
                        placeholder="johndoe47"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password">Password</label>
                      <input
                        id="signup-password"
                        ref={this.passwordRef}
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="••••••••"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-confirm">Confirm Password</label>
                      <input
                        id="signup-confirm"
                        ref={this.confirmPasswordRef}
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        placeholder="••••••••"
                        required
                      ></input>
                    </div>
                    <button className="btn btn-outline-secondary btn-block shiny joinButton">
                      {this.state.isLoading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Joining...
                        </>
                      ) : (
                        "Join Gigl"
                      )}
                    </button>
                  </form>
              <div className="d-flex align-items-center text-center flex-column">
                <div>
                  By registering you confirm you accept the{" "}
                  <span>
                    <a href="placeholder">Terms and Conditions</a>
                  </span>{" "}
                  and{" "}
                  <span>
                    <a href="placeholder">Privacy Policy</a>
                  </span>
                </div>
                <div className="dropdown-divider w-100"></div>
                <div>
                  Already have an account?{" "}
                  <Link to={"/login"}>Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;