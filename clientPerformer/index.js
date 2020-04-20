import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';
<<<<<<< HEAD
import Signup from '../clientShared/Signup/Signup.jsx'
=======
import Login from '../clientShared/Login'
>>>>>>> 2eee262dda53d84f7b1473d8441db1ebba92bde8

ReactDOM.render(<BrowserRouter basename="/performer">
<Switch>
    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/signup">
        <Signup />
    </Route>
    <Route path="/">
        <App />
    </Route>
</Switch>
</BrowserRouter>, document.getElementById('root'));