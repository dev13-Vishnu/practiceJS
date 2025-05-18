import React, { useRef, useState } from 'react'

const UseRefTimer = () => {
    const [seconds , setSeconds] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if(timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000)
    };
    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };
    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    };
  return (
    <div style={{textAlign: 'center', marginTop: '40px'}}>
        <h2>Timer: {seconds}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer} style={{marginLeft: '10px'}}>Stop</button>
        <button onClick={resetTimer} style={{marginLeft: '10px'}}>Reset</button>
      
    </div>
  )
}

export default UseRefTimer;