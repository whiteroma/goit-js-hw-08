import Player from '@vimeo/player';
import {throttle} from 'lodash';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const STORAGE_KEY = 'videoplayer-current-time'

    player.on('timeupdate', throttle(e => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(e.seconds));
        console.log(e.seconds)
    }), 500);

    const time = localStorage.getItem(STORAGE_KEY)

    player.setCurrentTime(JSON.parse(time))