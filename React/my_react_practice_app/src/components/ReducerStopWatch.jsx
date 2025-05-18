function reducer (state, action) {
    switch(action.type) {
        case 'START': 
            return { ...state , isRunning: true};
        case 'STOP': 
            return {...state, isRunning: false};
        case 'RESET':
            return{isRunning:false, time: 0};
        case 'TICK':
            return state.isRunning ? {...state, time: state.time + 1} : state;
        default:
            return state;
    }
}

const initialState = {
    time: 0,
    isRunning: false
};

import React, { useEffect, useReducer } from 'react'

const ReducerStopWatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const intervalId = setInterval(()=>{
            dispatch({type:'TICK'})
        },1000);

        return ()=> clearInterval(intervalId);
    },[]);

    const format = (n) => n.toString().padStart(2,'0');
    const hours = Math.floor(state.time/3600);
    const minutes = Math.floor((state.time % 3600)/60);
    const seconds = state.time % 60;
  return (
    <div>
      <h1>
        Stopwatch: {format(hours)}:{format (minutes)}:{format(seconds)}
      </h1>
      <button onClick={()=>{dispatch({type:'START'})}}>Start</button>
      <button onClick={()=>{dispatch({type:'STOP'})}}>Stop</button>
      <button onClick={()=>{dispatch({type:'RESET'})}}>Reset</button>
    </div>
  )
}

export default ReducerStopWatch
