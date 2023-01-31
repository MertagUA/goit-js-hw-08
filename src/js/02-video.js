import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

const CURRENT_TIME_KEY = "videoplayer-current-time";

iframePlayer.on('timeupdate', throttle(onPlayCurrentTime, 1000));

function onPlayCurrentTime({seconds}) {
    localStorage.setItem(CURRENT_TIME_KEY, seconds)
}

iframePlayer.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
