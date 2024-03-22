import React, { useState, useRef } from "react";

const Stop_watch = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(null);
  const IntervalRef = useRef(0);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(IntervalRef.current);
    IntervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop(){
    clearInterval(IntervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Time: {secondsPassed.toFixed(3)} </h1>
      <button className="btn" onClick={handleStart}>
        Start
      </button>
      <button className="btn" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};




export default Stop_watch;
