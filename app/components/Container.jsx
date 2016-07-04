/*
 * Create the Container section for holding all the child elements
 */
var React   = require('react');
var styles  = require('../styles/index.js');

// Stateless Component
var Container = (props) => {
  return(
    <div className="container">
      <div style={styles.starterTemplate}>
        {props.children}
      </div>
    </div>
  )
}

module.exports = Container;
