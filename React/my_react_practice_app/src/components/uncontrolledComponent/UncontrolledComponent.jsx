import React from 'react'
import { useRef } from 'react'

const UncontrolledComponent = () => {

    const inputRef = useRef();

    const handleSubmit = () => {
        alert(`inputValue: ${inputRef.current.value}`)
    }
  return (
    <div>
      <h1>Uncontrolled component</h1>
      <input type='text' ref={inputRef} placeholder='type something...'/>
      <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default UncontrolledComponent
