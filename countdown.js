import countdownTimer from './countdown-timer'
import riot from 'riot'

riot.tag('countdown', '{ this.countdown }', function(opts) {

  console.log(this.root.children[0].innerText)

  this.on('update', function() {
    var countdown = countdownTimer(this.opts.time);
    if(countdown){
      this.countdown = countdown;
    }else{
      this.countdown = this.opts.message;
      this.opts.update = false;
    }
    if(this.opts.update ===  ""){
      setInterval(function(){
        console.log("updating")
        this.update();
      }.bind(this), 1000);
    }
  })

});
