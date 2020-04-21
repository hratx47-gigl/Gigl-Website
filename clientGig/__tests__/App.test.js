import React from 'react'
import {render, fireEvent, cleanup, waitFor} from '@testing-library/react'
import Login from "../../clientShared/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom";
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import App from '../Components/App';



afterEach(cleanup);


it('CheckboxWithLabel changes the text after click', async () => {
    const { getByText } = render(<App/>,);

    const dolphin = await waitFor(() => getByText(/dolphin/i),)

    expect(dolphin).toBeTruthy();
});

test('renders correctly', () => {
    const {container, getByText} = render(<BrowserRouter><Login/></BrowserRouter>)
    expect(getByText('Login to your Account')).toBeInTheDocument();
    expect(getByText('Email address')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText("Don't have an Account?")).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot();
  });



// Test Ideas // 
  // if the user did not put in a valid email then alert should happen
  // if the username does not match throw alert username and/or password does not match
  // if the password doesnt match throw alert username and/or password does not match

  // check for a login button
  

