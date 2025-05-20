import React, { useState } from 'react'

const ToggleButtonState = () => {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => setIsOn(prev => !prev);


  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <button onClick={toggle}>
            {isOn? 'ON': 'OFF'}
        </button>
      
    </div>
  )
}

export default ToggleButtonState;