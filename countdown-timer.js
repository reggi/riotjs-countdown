import moment from 'moment'

export default countdownTimer

function countdownTimer(string){
  var withoutTime = "YYMMDD";
  var withTime = "YYMMDDHHmm";

  var format = function(){
    if(string.length == withoutTime.length) return withoutTime;
    if(string.length == withTime.length) return withTime;
    return false;
  }();

  var now = moment();
  var date = moment(string, format);

  if(date.isBefore(now)) return false;

  var days = moment(date)
    .diff(now, "days");
  var hours = moment(date)
    .subtract(days, "days")
    .diff(now, "hours");
  var minutes = moment(date)
    .subtract(days, "days")
    .subtract(hours, "hours")
    .diff(now, "minutes");
  var seconds = moment(date)
    .subtract(days, "days")
    .subtract(hours, "hours")
    .subtract(minutes, "minutes")
    .diff(now, "seconds");

  var day_name = (days === 1)? "day": "days";
  var hours_name = (hours === 1)? "hour": "hours";
  var minutes_name = (minutes === 1)? "minute": "minutes";
  var seconds_name = (seconds === 1)? "second": "seconds";

  var countdown = [
    days + " " + day_name,
    hours + " " + hours_name,
    minutes + " " + minutes_name,
    seconds + " " + seconds_name
  ].join(", ");

  return countdown;
}
