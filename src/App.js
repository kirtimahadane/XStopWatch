import { useState, useEffect } from "react";
import "./styles.css";
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
export default function App() {
  const [isRunnig, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunnig) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunnig) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunnig, time]);
  const toggle = () => {
    setIsRunning(!isRunnig);
  };
  const resetFunc = () => {
    setIsRunning(false);
    setTime(0);
  };
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p> Time: {formatTime(time)}</p>
      <button onClick={toggle}>{isRunnig ? "Stop" : "Start"}</button>
      <button onClick={resetFunc}>Reset</button>
    </div>
  );
}
