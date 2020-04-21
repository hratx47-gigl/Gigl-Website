import React from 'react'
import {render, fireEvent, cleanup, waitFor, getByRole, getByDisplayValue} from '@testing-library/react'
import Login from "../../clientShared/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom";
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import App from '../Components/App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
// import Signup from '../../clientShared/Signup'
import axios from 'axios';

jest.mock('axios');
afterEach(cleanup);


describe('login page tests', () => {
  const history = createMemoryHistory();
  history.push("/client/login")
  let {getByText} = render(
    <Router history={history}>
        <Login/>
    </Router>
  );

  test('login page renders correctly', () => {
      // const {getByText} = render(<BrowserRouter><Login/></BrowserRouter>)
      expect(getByText('Login to your Account')).toBeInTheDocument();
      expect(getByText('Email address')).toBeInTheDocument();
      expect(getByText('Password')).toBeInTheDocument();
      expect(getByText("Don't have an Account?")).toBeInTheDocument();
  });

  test('sign up click event redirects to the sign up page', ()=> {
    const history = createMemoryHistory();
    history.push("/client/login")
    const {getByText} = render(
      <Router history={history}>
          <Login/>
      </Router>
    );
    fireEvent.click(getByText(/Sign Up/i))
    expect(history.location.pathname).toBe("/signup")
  });

  test('login click event redirects to the client dashboard page upon successful authentication', ()=> {
    const history = createMemoryHistory();
    history.push("/client/login")
    const {getByRole} = render(
      <Router history={history}>
          <Login/>
      </Router>
    );
    //redirect should only happen after succesful authentication
    const resp = {data: {authenticated: true}}
    const testResponse = axios.post.mockResolvedValue(resp); 
    fireEvent.click(getByRole("button"))
    expect(history.location.pathname).toBe("/client")
  });
  
  test('login click event stays on login page upon unsuccessful authentication & displays message', ()=> {
    const history = createMemoryHistory();
    history.push("/client/login")
    const {getByRole} = render(
      <Router history={history}>
          <Login/>
      </Router>
    );
    const email = john.doe@gmail.com;
    const password = catzz;
    const resp = {data: {authenticated: false}}
    const testResponse = axios.post.mockResolvedValue(resp); 
    fireEvent.click(getByRole("button"))

    let unsuccessfulAuthenicationMessage = getByText("Incorrect username or password.")
    expect(history.location.pathname).toBe("/client/login");
    expect(unsuccessfulAuthenicationMessage).toBeTruthy();
  });


  test('an authenticated axios post responds with true on the authentication object', () => {
    const resp = {data: {authenticated: true}}
    const testResponse = axios.post.mockResolvedValue(resp);  
    expect(testResponse.data.authenticated).toBe(true)
  })
})

//login click event creates axios request
//when we get an axios response of not succesful then display message and remain on login page
//add cookies

// Test Ideas // 
  // if the user did not put in a valid email then alert should happen
  // if the username does not match throw alert username and/or password does not match
  // if the password doesnt match throw alert username and/or password does not match

  // check for a login button
  //clicking the logo on the website triggers the logo click handler to make sure that the naming convention is strict

  

