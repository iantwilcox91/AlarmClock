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
