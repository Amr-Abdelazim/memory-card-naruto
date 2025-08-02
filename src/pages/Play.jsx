import { useEffect, useState } from "react";
import "../styles/Play.css";
import api from "../../ApiData";
import desktopVideo from "../assets/kakashi-desktop-wallpaper.mp4";
import mobileVideo from "../assets/kakashi-mobile-wallpaper.mp4";
import Timer from "../components/Timer";
import AudioController from "../../AudioController";

export default function Play({ setGameOver }) {
  const [characters, setCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const [score, setScore] = useState(0);
  const [maxHot, setMaxHot] = useState(localStorage.getItem("maxHot") || 0);
  const [maxScore, setMaxScore] = useState(
    localStorage.getItem("maxScore") || 0
  );
  const [hot, setHot] = useState(0);
  const [time, setTime] = useState(0);
  const [lastClick, setLastClick] = useState(0);

  const [videoSrc, setVideoSrc] = useState(desktopVideo);
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
    api.getAll().then(setCharacters);
  }, []);

  const getRandomElements = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  function handleHotClick() {
    if (time - lastClick > 2) {
      setHot(1);
      setLastClick(time);
      return;
    }
    AudioController.play_fire();
    setLastClick(time);
    setHot((prev) => prev + 1);
  }
  async function handleCardClick(e) {
    AudioController.play_sowrd();

    const clickedChar = await api.getCharById(Number(e.currentTarget.id));
    console.log(clickedChar);
    if (clickedCharacters.includes(clickedChar)) {
      AudioController.stop_morning();
      AudioController.play_gameover();
      setGameOver(true);
      return;
    }
    handleHotClick();
    setClickedCharacters((prev) => [...prev, clickedChar]);
    setCharacters((prev) => prev.filter((char) => char !== clickedChar));
    setScore((prev) => prev + 1);
  }
  useEffect(() => {
    function selectChar(newChars) {
      console.log("hi");
      setSelectedCharacters(
        [
          ...getRandomElements(characters, newChars),
          ...getRandomElements(clickedCharacters, 6 - newChars),
        ].sort(() => 0.5 - Math.random())
      );
    }
    function updateCharacters() {
      const newChars =
        score >= 40
          ? 1
          : score >= 30
          ? 2
          : score >= 20
          ? 3
          : score >= 10
          ? 4
          : score > 0
          ? 5
          : 6;
      selectChar(newChars);
    }
    updateCharacters();
  }, [clickedCharacters, score, characters]);

  useEffect(() => {
    if (score > maxScore) {
      localStorage.setItem("maxScore", score);
      setMaxScore(score);
    }
  }, [score, maxScore]);
  useEffect(() => {
    if (hot > maxHot) {
      localStorage.setItem("maxHot", hot);
      setMaxHot(hot);
    }
  }, [hot, maxHot]);

  return (
    <div className="home main-container">
      <video key={videoSrc} autoPlay muted loop id="bg-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="data-container">
        <Timer resetTimer={false} time={time} setTime={setTime} />
        <h1>🔥 Score: {score}</h1>
        <h1>🏆 Max Score: {maxScore}</h1>
        <h1>💥: {hot}</h1>
        <h1>🥵 Max Hot: {maxHot}</h1>
      </div>
      <div className="card-container">
        {selectedCharacters.map((char) => {
          return (
            <div
              className="card"
              onClick={handleCardClick}
              key={char.id}
              id={char.id}
            >
              <img src={char.images[0]} alt={char.name} />
              <p>{char.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
