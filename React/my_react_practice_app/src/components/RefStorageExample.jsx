import React, { useRef } from 'react'

const RefStorageExample = () => {
    const countRef = useRef(0);

    const increment = () => {
        countRef.current += 1;
        console.log('Ref Count:', countRef.current);
    };
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Click and Check Console</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default RefStorageExample
