import React, { useEffect, useState } from 'react'

const LifeCycleExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log(`✅ Component mounted`);
    
      return () => {
        console.log(`❌ Component will unmount`);
      };    
    }, [])

    useEffect(() => {
        if(count > 0) {
            console.log(`🔁 Count updated:`, count);
        }
    },[count])
    
  return (
    <div style={{textAlign: 'center', marginTop:'40px'}}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev +1)}>Increment</button>
    </div>
  )
}

export default LifeCycleExample