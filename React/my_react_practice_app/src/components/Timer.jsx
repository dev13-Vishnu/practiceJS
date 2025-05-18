import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds , setSeconds] = useState(0);
    useEffect(()=> {
        const intervalId = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])
  return (
    <div>
      <h1>Timer : {seconds}seconds</h1>
    </div>
  )
}

export default Timer
