import MorningMusic from "./src/assets/morning.mp3";
import SowrdEffict from "./src/assets/sowrd.mp3";
import FireEffict from "./src/assets/fire.mp3";
import Margit from "./src/assets/margit.mp3";
import Itachi from "./src/assets/Itachi.mp3";
import Obit from "./src/assets/obito.mp3";

class AudioController {
    constructor() {
        this.morning = null;
        this.itachi = null;
        this.obito = null;
    }

    play_morning() {
        this.stop_itachi();
        this.stop_obito();
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
    play_obito() {
        this.stop_itachi();
        this.stop_morning();
        if (!this.obito) {
            const audio = new Audio(Obit);
            audio.loop = true;
            audio.volume = 0.5;
            audio.currentTime = 0;
            audio.play();
            this.obito = audio;
        } else if (this.obito.paused) {
            this.obito.play();
        }
    }

    play_sowrd() {

        const audio = new Audio(SowrdEffict);
        audio.volume = 0.8;
        audio.currentTime = 0.1;
        audio.play();
    }
    play_itachi() {
        this.stop_morning();
        this.stop_obito();
        if (!this.itachi) {
            const audio = new Audio(Itachi);
            audio.loop = true;
            audio.volume = 0.8;
            audio.currentTime = 0;
            audio.play();
            this.itachi = audio;
        } else if (this.itachi.paused) {
            this.itachi.play();
        }
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
    pause_obito() {
        if (this.obito && !this.obito.paused) {
            this.obito.pause();
        }
    }
    pause_itachi() {
        if (this.itachi && !this.itachi.paused) {
            this.itachi.pause();
        }
    }

    stop_morning() {
        if (this.morning) {
            this.morning.pause();
            this.morning.currentTime = 15;
            this.morning = null;
        }
    }
    stop_obito() {
        if (this.obito) {
            this.obito.pause();
            this.obito.currentTime = 15;
            this.obito = null;
        }
    }
    stop_itachi() {
        if (this.itachi) {
            this.itachi.pause();
            this.itachi.currentTime = 0;
            this.itachi = null;
        }
    }
}

export default new AudioController();
