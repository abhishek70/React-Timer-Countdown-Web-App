/*
 * Test cases for the Timer and CountDown Buttons
 */
var expect    = require('expect');
var React     = require('react');
var ReactDOM  = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $         = require('jQuery');

var Buttons = require('Buttons');

describe('Buttons', () => {
  it('should exist', () => {
    expect(Buttons).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      var buttons = TestUtils.renderIntoDocument(<Buttons countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(buttons));
      var $pauseBtn = $el.find('button:contains(Pause)');
      expect($pauseBtn.length).toBe(1);
    });

    it('should render start when paused', () => {
      var buttons = TestUtils.renderIntoDocument(<Buttons countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(buttons));
      var $startBtn = $el.find('button:contains(Start)');
      expect($startBtn.length).toBe(1);
    });
  });

});
