import countdownTimer from './countdown-timer'
import riot from 'riot'

<countdown>

  { this.countdown }

  <script>

  this.on('update', function() {
    this.countdown = countdownTimer(this.opts.time);
    if(this.opts.update ===  ""){
      setInterval(function(){
        this.update();
      }.bind(this), 1000);
    }
  })

  </script>

</countdown>
