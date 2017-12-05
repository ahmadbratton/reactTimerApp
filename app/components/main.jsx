var React = require('react');
var Nav = require("app/components/Nav.jsx")


var main = (props) => {
  return(
    <div>
      <div >
        <div >
          <Nav/>
          <p>main.jsx Rendered </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = main;
