import React, { useRef } from 'react'

const TextColorChanger = () => {
    const textRef = useRef(null);

    const changeTextColor = () => {
        if(textRef.current) {
            textRef.current.style .color = getRandomColor();
        }
    };

    const getRandomColor = () => {
        const colors = ['red', 'blue', 'green', 'purple', 'oragen', 'teal'];
        return colors [Math.floor(Math.random() * colors.length)]
    }
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1 ref={textRef}>This text will change color!</h1>
        <button onClick={changeTextColor}>Change Text</button>
    </div>
  )
}

export default TextColorChanger
