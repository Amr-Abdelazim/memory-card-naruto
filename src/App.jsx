import "./App.css";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Play from "./pages/Play";
import GameOver from "./pages/GameOver";
import WinGame from "./pages/WinGame";
function App() {
  const [currentPage, setCurrentPage] = useState("home"); // should be home set it timer just for test
  const [gameOver, setGameOver] = useState(false);
  const [wingame, setWinGame] = useState(false);
  const [status, setStatus] = useState({
    time: 0,
    score: 0,
    hot: 0,
  });
  const [soundInit, setSoundInit] = useState(0);
  useEffect(() => {
    if (gameOver) {
      setCurrentPage("gameover");
    }
  }, [gameOver]);
  useEffect(() => {
    if (wingame) {
      setCurrentPage("win");
    }
  }, [wingame]);
  return (
    <>
      {currentPage === "home" && (
        <Home
          setCurrentPage={setCurrentPage}
          setGameOver={setGameOver}
          sound_init={soundInit}
        />
      )}
      {currentPage === "play" && (
        <Play
          setGameOver={setGameOver}
          setStatus={setStatus}
          setWinGame={setWinGame}
        />
      )}
      {currentPage === "gameover" && (
        <GameOver
          status={status}
          setCurrentPage={setCurrentPage}
          setGameOver={setGameOver}
          setSoundInit={setSoundInit}
        />
      )}
      {currentPage === "win" && (
        <WinGame
          status={status}
          setCurrentPage={setCurrentPage}
          setWinGame={setWinGame}
          setSoundInit={setSoundInit}
        />
      )}
    </>
  );
}

export default App;
