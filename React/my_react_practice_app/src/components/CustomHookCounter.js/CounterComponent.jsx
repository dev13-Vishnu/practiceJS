import React from 'react'
import UseCounter from './UseCounter'

const CounterComponent = () => {
    const {count, increment, decrement, reset} = UseCounter(5);
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement} style={{marginLeft: '10px'}}>-</button>
        <button onClick={reset} style={{marginLeft: '10px'}}>Reset</button>
      
    </div>
  )
}

export default CounterComponent