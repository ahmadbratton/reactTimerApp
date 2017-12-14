var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router")
var main = require("main");
var timer = require("./components/Timer.jsx");
var Countdown = require("./components/Countdown.jsx");

//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

// app css
require("style!css!sass!app/styles/app.scss")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={main}>
    <Route path="countdown" component={Countdown}/>
    <IndexRoute component={timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
