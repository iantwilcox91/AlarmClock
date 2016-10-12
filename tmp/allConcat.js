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
