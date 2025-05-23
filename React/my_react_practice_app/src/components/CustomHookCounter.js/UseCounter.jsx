import React, { useState } from 'react'

const UseCounter = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(c=> c+1);
    const decrement = () => setCount(c => c -1);
    const reset = () => setCount (initialValue);

  return {count, increment, decrement, reset};
}

export default UseCounter