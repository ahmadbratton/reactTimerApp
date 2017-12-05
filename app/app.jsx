var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router")
var main = require("main");

//Load foundation
require("style!css!foundation-sites/dist/foundation.min.css")
$(document).foundation();

// app css
require("style!css!sass!app/styles/app.scss")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
