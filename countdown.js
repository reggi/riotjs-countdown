import moment from 'moment'
import riot from 'riot'

riot.tag('countdown', '{ this.opts.time }', function(opts) {
  var string = this.opts.time;
  console.log(string)
  var withoutTime = "YYMMDD";
  var withTime = "YYMMDDHHmm";
  var format = function(){
  if(string.length == withoutTime.length) return withoutTime;
  if(string.length == withTime.length) return withTime;
  return false;
  }();
  var date = moment(string, format);
  var days = moment(date).diff(moment(), "days");
  var hours = moment(date, "YYYY-MM-DD").subtract(days, "days").diff(moment(), "hours");
  this.string = [days, "days,", hours, "hours left!"].join(" ");

})
