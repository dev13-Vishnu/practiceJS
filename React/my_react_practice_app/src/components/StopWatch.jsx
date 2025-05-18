import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId ;
        if(isRunning){
            intervalId = setInterval(()=> {
                setTime(prev => prev +1);
            },100)
        }
        return () => clearInterval(intervalId);
    },[isRunning]);

    const format = (n) => n.toString().padStart(2,'0');
    const hours = Math.floor(time/3600);
    const minutes = Math.floor((time % 3600)/60);
    const seconds = time % 60;

  return (
    <div>
      <h1>
        Stopwatch: {format(hours)}:{format(minutes)}:{format(seconds)}
      </h1>
      <button onClick={() =>setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  )
}

export default StopWatch
