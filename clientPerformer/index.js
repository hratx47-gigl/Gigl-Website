import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';
import PerformerDashboard from './Components/dashboard/PerformerDashboard';
import Signup from '../clientShared/Signup/Signup.jsx'
import Login from '../clientShared/Login'

ReactDOM.render(<BrowserRouter basename="/performer">
<Switch>
    <Route path="/login">
        <Login apiUrl="/api/performer/login" userType="performer"/>
    </Route>
    <Route path="/signup">
        <Signup />
    </Route>
    <Route exact={true} path="/gigdashboard">
        <PerformerDashboard/>
    </Route>

    {/* keep at bottom */}
    <Route path="/">
        <App />
    </Route>
    
</Switch>
</BrowserRouter>, document.getElementById('root'));