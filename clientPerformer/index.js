import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from './Components/App.js';
import PerformerDashboard from './Components/dashboard/PerformerDashboard';

ReactDOM.render(<BrowserRouter basename="/performer">
<Switch>
    <Route path="/login">
        <h1>Login</h1>
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