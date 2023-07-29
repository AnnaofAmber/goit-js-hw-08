import VimeoPlayer from "@vimeo/player"
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new VimeoPlayer(iframe);

function onPlay ( timeupdate) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate.seconds))
    
  }

player.on('timeupdate', throttle(onPlay, 1000))
const data = localStorage.getItem("videoplayer-current-time")
const parsedData = JSON.parse(data)
player.setCurrentTime(parsedData)







// .then(function (seconds){}).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// })

