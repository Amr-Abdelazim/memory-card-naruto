import "../styles/GameOver.css";
import backGroundImage from "../assets/Itachi.jpeg";
import AudioController from "../../AudioController";
export default function gameOver({
  status,
  setCurrentPage,
  setGameOver,
  setSoundInit,
}) {
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
        backgroundImage: `url(${backGroundImage})`,
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
