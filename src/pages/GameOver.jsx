import "../styles/GameOver.css";
import itachiImage from "../assets/Itachi.jpeg";
import itachiImageMobile from "../assets/itachiMobile.jpeg";
import AudioController from "../../AudioController";
import { useState,useEffect } from "react";
export default function gameOver({
  status,
  setCurrentPage,
  setGameOver,
  setSoundInit,
}) {

   const [imageSrc, setImageSrc] = useState(itachiImage);
      useEffect(() => {
        const updateImageSource = () => {
          if (window.innerWidth <= 768) {
            setImageSrc(itachiImageMobile);
          } else {
            setImageSrc(itachiImage);
          }
        };
    
        updateImageSource();
        window.addEventListener("resize", updateImageSource);
    
        return () => window.removeEventListener("resize", updateImageSource);
      }, []);

  function tryAgain() {
    setGameOver(false);
    setCurrentPage("play");
  }
  function goToHome() {
    AudioController.play_morning();
    setSoundInit(1);
    setGameOver(false);
    setCurrentPage("home");
  }
  return (
    <div
      className="gameover-container"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="status-container">
        <h1>🕒:{status.time}</h1>
        <h1>🔥:{status.score}</h1>
        <h1>🥵:{status.hot}</h1>
      </div>
      <div className="btns-container">
        <button onClick={goToHome}>Home</button>
        <button onClick={tryAgain}>Try Again</button>
      </div>
    </div>
  );
}
