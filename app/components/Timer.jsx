/*
 * Create the Timer holder for Clock, Buttons
 */

var React     = require('react');
var Container = require('Container');
var Clock     = require('Clock');
var Buttons   = require('Buttons');

var Timer = React.createClass({
  
  getInitialState:function(){
    return{
      count : 0,
      timerStatus : 'stopped'
    }
  },

  componentDidUpdate:function(prevProps, prevState){
    var {timerStatus} = this.state;
    if(timerStatus !== prevState.timerStatus) {
      switch (timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;

      }
    }
  },

  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer:function(){
    this.timer = setInterval(()=>{
      this.setState({
        count:this.state.count + 1
      })
    },1000);
  },

  handleStatusChange:function(newStatus){
    this.setState({
      timerStatus:newStatus
    })
  },

  render: function() {
    var {count, timerStatus} = this.state;
    return(
      <Container>
        <h1>Timer</h1>
        <Clock totalSec={count}/>
        <Buttons countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </Container>
    );
  }
})

module.exports = Timer;
