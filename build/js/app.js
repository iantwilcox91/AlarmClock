(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarming(beepAlert){
  this.beep = beepAlert;
}

Alarming.prototype.ringz = function(alarmTime) {
  console.log("rings");

  setInterval(myAlarm, 1000);

  function myAlarm(alarmTime) {
      actualTime = moment();
      if (alarmTime !== actualTime) {
        console.log("spot1");
      }
      else  if (alarmTime === actualTime) {
        console.log("spot2");
        var output = "Ring Ring!";
        clearInterval();
        return output;
      }
    }
};


exports.alarmingModule = Alarming;

},{}],2:[function(require,module,exports){
var Alarming = require('../js/alarmclock.js').alarmingModule;

$(document).ready(function(){
  $('#time').text(moment());
});


$(document).ready(function(){
  $("#button1").click(function(){
    var alarmTime = $('input[name=alarm]').val();
    $("p").append(alarmTime);
    var newAlarming = new Alarming("beepAlert");
    var output = newAlarming.ringz(alarmTime);
    $("h1").append(output);
  });
});

},{"../js/alarmclock.js":1}]},{},[2]);
