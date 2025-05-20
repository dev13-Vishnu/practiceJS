import React, { useReducer } from 'react'

const toggleReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state; 
    }
};
const ToggleButtonReducer = () => {
    const [isOn, dispatch] = useReducer(toggleReducer)
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <button onClick={() =>dispatch({type: 'TOGGLE'})}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default ToggleButtonReducer
