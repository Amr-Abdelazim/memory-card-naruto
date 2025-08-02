import { useEffect, useState } from "react";
import desktopVideo from "../assets/naruto-desktop-wallpaper.mp4";
import mobileVideo from "../assets/naruto-mobile-wallpaper.mp4";
import "../styles/Home.css";

import AudioController from "../../AudioController";

export default function Home({ setCurrentPage, setGameOver }) {
  const [videoSrc, setVideoSrc] = useState(desktopVideo);
  const [togelSound, setTogelSound] = useState(0);
  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(mobileVideo);
      } else {
        setVideoSrc(desktopVideo);
      }
    };

    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);

    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);
  useEffect(() => {
    if (togelSound === 2) AudioController.pause_morning();
    else if (togelSound === 1) AudioController.play_morning();
  }, [togelSound]);
  return (
    <div className="home">
      <video key={videoSrc} autoPlay muted loop id="bg-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay-content">
        <div className="welcome-container">
          <h1>🍥 Welcome to the Naruto World</h1>
          <p>🌌 Choose your ninja path and test your memory!</p>
          <button
            onClick={() => {
              setCurrentPage("play");
              setGameOver(false);
            }}
          >
            🌀 Enter the Game
          </button>
        </div>
        <button
          className="sound-btn"
          onClick={() =>
            setTogelSound((prev) => {
              if (prev === 0) return 1;
              else return 3 - prev;
            })
          }
        >
          {togelSound === 1 ? "🔊" : "🔇"}
        </button>
      </div>

      <div className="help-popup">
        <p>🌀 Welcome to the Naruto Memory Card Game!</p>
        <p>🔸 Don't click the same card twice!</p>
        <p>⚡ Try to finish as fast as possible!</p>
        <p>🔥 Max score is 50 points!</p>
        <p>🎮 Reach the max score to unlock special character music!</p>
        <p>🧩 Have fun and enjoy the game!</p>
      </div>
    </div>
  );
}
