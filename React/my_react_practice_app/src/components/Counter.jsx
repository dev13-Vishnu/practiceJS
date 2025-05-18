import React, { useRef, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increment = () => {
        countRef.current += 1;
        setCount(countRef.current);
    };

    const decrement = () => {
        countRef.current -= 1;
        setCount (countRef.current);
    };

    const reset = () => {
        countRef.current = 0;
        setCount(0);
    };
  return (
    <div
        style={{
            textAlign: 'center',
            marginTop: '50px'
        }}
    >
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}
            style={{marginLeft: '10px'}}
        >Decrement</button>
        <button onClick={reset} 
            style={{marginLeft: '10px'}}
        >Reset</button>

      
    </div>
  )
}

export default Counter
