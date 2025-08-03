import { useEffect } from "react";

export default function Timer({ resetTimer, time, setTime }) {
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, [setTime]);
  useEffect(() => {
    setTime(0);
  }, [resetTimer, setTime]);

  return <h1>🕒:{time}</h1>;
}
