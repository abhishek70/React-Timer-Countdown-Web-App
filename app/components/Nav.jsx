/*
 * Create the app navigation section
 */
var React             = require('react');
var {Link, IndexLink} = require('react-router');
var styles            = require('../styles/index');

// Using Arrow Function Notation (Stateless Components)
var Nav = (props) => {
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Timer-Countdown App</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active" activeStyle={styles.active}>Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active" activeStyle={styles.active}>CountDown</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

module.exports = Nav;
