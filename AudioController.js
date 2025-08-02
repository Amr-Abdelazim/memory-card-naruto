import MorningMusic from "./src/assets/morning.mp3";
import SowrdEffict from "./src/assets/sowrd.mp3";
import FireEffict from "./src/assets/fire.mp3";
import Margit from "./src/assets/margit.mp3";

class AudioController {
    constructor() {
        this.morning = null;
    }

    play_morning() {
        if (!this.morning) {
            const audio = new Audio(MorningMusic);
            audio.loop = true;
            audio.volume = 0.5;
            audio.currentTime = 15;
            audio.play();
            this.morning = audio;
        } else if (this.morning.paused) {
            this.morning.play();
        }
    }
    play_sowrd() {

        const audio = new Audio(SowrdEffict);
        audio.volume = 0.8;
        audio.currentTime = 0.1;
        audio.play();

    }
    play_fire() {

        const audio = new Audio(FireEffict);
        audio.volume = 0.8;
        audio.currentTime = 0.5;
        audio.play();

    }

    play_gameover() {
        const audio = new Audio(Margit);
        audio.volume = 0.8;
        audio.currentTime = 0;
        audio.play();
    }

    pause_morning() {
        if (this.morning && !this.morning.paused) {
            this.morning.pause();
        }
    }

    stop_morning() {
        if (this.morning) {
            this.morning.pause();
            this.morning.currentTime = 15;
            this.morning = null;
        }
    }
}

export default new AudioController();
