/*
 * Create the CountDown Form
 */

var React                           = require('react');
var {FormGroup, FormControl, Input} = require('react-bootstrap');

var CountdownForm = React.createClass({

  getInitialState: function() {
    return {
      errorState:null,
      seconds:'',
    }
  },

  onSubmit: function (e) {
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    if(seconds > 0 && seconds.match(/^[0-9]*$/)) {
      this.props.onSetCountdown(parseInt(seconds, 10));
      this.setState({
        errorState: null,
        seconds:''
      });
    } else {
      this.setState({errorState: 'has-error'});
      return false;
    }
  },

  handleChange(e) {
    const length = e.target.value.length;

    if(length > 0) {
      this.setState({ errorState: 'has-success' });
    } else if(length <= 0) {
      this.setState({ errorState: 'has-error' });
    }

    this.setState({ seconds: e.target.value });
  },

  render: function () {
    return (
      <div className="col-md-4 col-md-offset-4">
        <form onSubmit={this.onSubmit}>
          <div className={`form-group ${this.state.errorState}`}>
            <input type="text"
                   value={this.state.seconds}
                   onChange={this.handleChange}
                   className="form-control"
                   ref="seconds"
                   placeholder="Enter time in seconds"/>
          </div>
          <button type="submit"
                  className="btn btn-primary btn-block">
                  Start
          </button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
