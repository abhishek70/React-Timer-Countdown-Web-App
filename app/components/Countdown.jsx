/*
 * Create the CountDown holder for Clock, Form, Buttons
 */
var React         = require('react');
var Container     = require('Container');
var Clock         = require('Clock');
var CountdownForm = require('CountdownForm');
var Buttons       = require('Buttons');

var Countdown = React.createClass({

  getInitialState:function(){
    return{
      count : 0,
      countdownStatus : 'stopped'
    }
  },

  componentWillUpdate:function(nextProps,nextState){
    //console.log('componentWillUpdate');
  },

  componentDidUpdate:function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
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

  componentWillMount:function(){
    //console.log("componentWillMount");
  },

  componentWillUnmount:function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  componentDidMount:function(){
    //console.log("componentDidMount");
  },

  startTimer:function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },

  handleSetCountdown:function(seconds){
    this.setState({
      count : seconds,
      countdownStatus : 'started'
    })
  },

  handleStatusChange:function(newStatus){
    this.setState({
      countdownStatus:newStatus
    })
  },

  render:function(){
    // Object Destructuring
    var {count, countdownStatus} = this.state;
    var btnSection = () => {
      if(countdownStatus !== "stopped") {
        return <Buttons countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return(
      <Container>
        <h1>Countdown</h1>
        <Clock totalSec={this.state.count}/>
        {btnSection()}
      </Container>
    )
  }
});

module.exports = Countdown;
