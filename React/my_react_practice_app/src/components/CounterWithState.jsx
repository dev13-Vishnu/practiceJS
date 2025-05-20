import React, { useState } from 'react'

const CounterWithState = () => {
    const[count, setCount] = useState(0);
  return (
    <div style={{textAlign: 'center'}}>
      <h2>UseState Conter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <button onClick={() => setCount(count - 1)} style={{marginLeft: '10px'}} >Decrement</button>
      <button onClick={() => setCount(0)} style={{marginLeft: '10px'}} >Reset</button>
    </div>
  )
}

export default CounterWithState;