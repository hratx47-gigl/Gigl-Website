import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';
import Signup from '../clientShared/Signup/Signup.jsx'
import Login from '../clientShared/Login';

ReactDOM.render((<BrowserRouter basename="/client">
    <Switch>
        <Route path="/login">
            <Login apiUrl="/api/client/login" userType ="client"/>
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/">
            <App />
        </Route>
    </Switch>
</BrowserRouter>), document.getElementById('root'));