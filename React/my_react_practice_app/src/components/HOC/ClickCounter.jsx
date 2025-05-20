import React from 'react'

const ClickCounter = ({count, increment}) => {
  return (
    <div style={{textAlign:'center', marginTop: '40px'}}>
      <h2> Clicked {count} times</h2>
      <button onClick={increment}>Click me</button>
    </div>
  )
}

export default ClickCounter
