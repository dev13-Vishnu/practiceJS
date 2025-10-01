import React,{useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev+1)}>increase</button>
    </div>
  )
}

export default Counter
