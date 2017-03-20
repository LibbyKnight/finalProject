function seekToTime(value) {

    var seekToTime = this.videoPlayer.currentTime + value;

    if( seekToTime < 0 || seekToTime > this.videoPlayer.duration ) 

        return;

    this.videoPlayer.currentTime = seekToTime;

}


// check current time of video
setInterval(function() {
  var x = document.getElementsByTagName('video');
  console.log(x[0].currentTime);
}, 500);


// skip to certain time
var x = document.getElementsByTagName('video');
x[0].currentTime = 1569.12;