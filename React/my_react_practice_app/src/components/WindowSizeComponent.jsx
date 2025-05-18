import React, { useEffect, useState } from 'react'

const WindowSizeComponent = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize =() => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])
  return (
    <div style={{textAlign: 'center', marginTop: '40px'}}>
        <h2>Window Size</h2>
        <p>Width: {size.width}</p>
        <p>Height: {size.height}</p>
    </div>
  )
}

export default WindowSizeComponent
