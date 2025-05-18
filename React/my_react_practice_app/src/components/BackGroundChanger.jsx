import React, { useRef } from 'react'

const BackGroundChanger = () => {
    const divRef = useRef(null);

    const changeBackground = () => {
        if(divRef.current) {
            divRef.current.style.backgroundColor = getRandomColor();
        }
    };

    const getRandomColor = () => {
        const letters = '123456789ABCDEF';
        let color = '#';
        for (let i = 0; i< 6 ; i++){
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }
  return (
    <div>
      <div
        ref={divRef}
        style={{
            width: '300px',
            height: '150px',
            backgroundColor: 'lightgray',
            margin: '20px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px'
        }}
      >
        <h3>Color Box</h3>
      </div>
      <button onClick={changeBackground}>Change BackGround Color</button>
    </div>
  )
}

export default BackGroundChanger
