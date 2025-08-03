import ObitoImage from "../assets/obito.jpeg";
import "../styles/WinGame.css";
import AudioController from "../../AudioController";
export default function WinGame({
  status,
  setCurrentPage,
  setWinGame,
  setSoundInit,
}) {
  function goToHome() {
    AudioController.play_morning();
    setSoundInit(1);
    setWinGame(false);
    setCurrentPage("home");
  }
  return (
    <div
      className="wingame-container"
      style={{
        backgroundImage: `url(${ObitoImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
    >
      <div className="status-container">
        <h1>🕒:{status.time}</h1>
        <h1>🔥:{status.score}</h1>
        <h1>🥵:{status.hot}</h1>
      </div>
      <div className="congrats">
        <h1>🎉 Victory Achieved! 🎉</h1>
        <h2>You conquered the challenge like a true shinobi 🐱‍👤</h2>
        <h2>🎶 Enjoy Obito’s music — you’ve earned every note 🔥</h2>
      </div>
      <div className="btns-container">
        <button onClick={goToHome}>Home</button>
      </div>
    </div>
  );
}
