var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var Clock = require("../components/Clock.jsx");

describe("Clock" , () => {
  it("should exist" , () => {
    expect(Clock).toExist();
  });

  describe("render" , () => {
    it("should render clock to output" , () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find(".clock-text").text();

      expect(actualText).toBe("01:02");
    })
  })


  describe("formatSeconds" , () => {
    it("should format Seconds", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expexted = "10:15";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expexted);
    });

    it("should format Seconds when min/sec are less than 10", () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expexted = "01:01";
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expexted);
    });


  });

});