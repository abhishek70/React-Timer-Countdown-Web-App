/*
 * Create the Clock section for the Timer/CountDown
 */

var React  = require('react');

var Clock = React.createClass({

  propTypes:{
    totalSec : React.PropTypes.number
  },

  getDefaultProps:function(){
    return{
        totalSec : 0
    }
  },

  formatTime:function(totalSec){
    var min = '00';
    var sec = '00';

    if(totalSec != 0) {
      var sec = totalSec % 60;
      var min = Math.floor(totalSec / 60);

      if(sec < 10) {
        sec = '0' + sec;
      }

      if(min < 10) {
        min = '0' + min;
      }
    }

    return min + ' : ' + sec;

  },

  render:function(){
    var {totalSec} = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatTime(totalSec)}
        </span>
      </div>
    )
  }
  
});

module.exports = Clock;
