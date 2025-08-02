import "./App.css";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Play from "./pages/Play";
function App() {
  const [currentPage, setCurrentPage] = useState("home"); // should be home set it timer just for test
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) {
      setCurrentPage("home");
    }
  }, [gameOver]);
  return (
    <>
      {currentPage === "home" && (
        <Home setCurrentPage={setCurrentPage} setGameOver={setGameOver} />
      )}
      {currentPage === "play" && <Play setGameOver={setGameOver} />}
    </>
  );
}

export default App;
