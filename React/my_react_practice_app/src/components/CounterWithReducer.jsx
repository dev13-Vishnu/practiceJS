import React, { useReducer } from 'react'
const initialState = 0;

function reducer (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const CounterWithReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{textAlign:'center', marginTop:'40px'}}>
      <h2>useReducer Counter</h2>
      <p>{count}</p>
      <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={()=> dispatch({type:'DECREMENT'})} style={{marginLeft: '10px'}}>Decrement</button>
      <button onClick={()=> dispatch({type:'RESET'})} style={{marginLeft: '10px'}}>Reset</button>
    </div>
  )
}

export default CounterWithReducer;