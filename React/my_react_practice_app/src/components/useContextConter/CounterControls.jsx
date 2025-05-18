import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const CounterControls = () => {
    const {increment, decrement} = useContext(CounterContext);
  return (
    <>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} style={{marginLeft:'10px'}}>
            Decrement
        </button>
    </>
    
  )
}

export default CounterControls
