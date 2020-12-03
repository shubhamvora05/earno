import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from "./components/home";
import About from "./components/Aboutus";
import Contact from "./components/contactus";
import Privacy from "./components/privacy_policy.jsx";
import Terms_condition from "./components/terms&condition.jsx";


ReactDOM.render(<Router>
<Switch>
<Route exact path='/' component={Home}></Route>
<Route exact path='/about' component={About}></Route>
<Route exact path='/contact' component={Contact}></Route>
<Route exact path='/privacy-policy' component={Privacy}></Route>
<Route exact path='/terms&condition' component={Terms_condition}></Route>
</Switch>
</Router>, document.getElementById("root"));
