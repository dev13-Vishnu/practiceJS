import {useContext} from 'react';
import CounterContext from './CounterContext';;
const CounterControls = () => {
  const {increment, decrement } = useContext(CounterContext);
  return ( 
    <>
      <button onClick={increment}>Increment</button>
      <button style={{marginLeft:'10px'}} onClick={decrement}>Decrement</button>
    </>
  )
}

export default CounterControls
