import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';

ReactDOM.render((<BrowserRouter basename="/giger">
    <Switch>
        <Route path="/login">
            <h1>Login</h1>
        </Route>
        <Route path="/signup">
            <h1>Signup</h1>
        </Route>
        <Route path="/">
            <App />
        </Route>
    </Switch>
</BrowserRouter>), document.getElementById('root'));