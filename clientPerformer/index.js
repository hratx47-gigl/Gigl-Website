import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';
import PerformerDashboard from './Components/dashboard/PerformerDashboard';
import Login from '../clientShared/Login'

ReactDOM.render(<BrowserRouter basename="/performer">
<Switch>
    <Route path="/login">
        <Login apiUrl="/api/performer/login"/>
    </Route>
    <Route path="/signup">
        <h1>Signup</h1>
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