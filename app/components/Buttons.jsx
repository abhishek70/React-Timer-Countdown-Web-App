/*
 * Create the Buttons/Controls section for the Timer/CountDown
 */
var React = require('react');

var Buttons = React.createClass({

  propTypes:{
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange : React.PropTypes.func.isRequired
  },

  componentWillReceiveProps:function(newProps){
    //console.log("Component will receive props", newProps.countdownStatus);
  },

  onStatusChange:function(btnStatus){
    return () => {
      this.props.onStatusChange(btnStatus);
    }
  },

  render:function(){

    var {countdownStatus} = this.props;
    var renderActionButton = () =>{
      if(countdownStatus === 'started'){
        return <button className="btn btn-danger btn-block" onClick={this.onStatusChange("paused")}>Pause</button>
      }else {
        return <button className="btn btn-primary btn-block" onClick={this.onStatusChange("started")}>Start</button>
      }
    }

    return(
      <div className="controls">
        <div className="col-md-2 col-md-offset-4">{renderActionButton()}</div>
        <div className="col-md-2">
          <button className="btn btn-default btn-block" onClick={this.onStatusChange("stopped")}>Clear</button>
        </div>
      </div>
    )
  }
});

module.exports = Buttons;
