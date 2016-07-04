/*
 * Create the app Container
 */

var React   = require('react');
var Nav     = require('Nav');
var styles  = require('../styles/index');

var Main = (props) => {
  return(
    <div style={styles.body}>
      <Nav/>
      {props.children}
    </div>
  )
}

module.exports = Main;
