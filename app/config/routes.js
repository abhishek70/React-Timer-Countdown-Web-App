/*
 * Defining the app routes
 */
var React      = require('react');
var Main       = require('Main');
var Timer      = require('Timer');
var Countdown  = require('Countdown');

// Object Destructering
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var routes = (
 <Router history={hashHistory}>
 	<Route path='/' component={Main}>
    <IndexRoute component={Timer}/>
    <Route path='countdown' component={Countdown}/>
  </Route>
 </Router>
);

module.exports = routes;
