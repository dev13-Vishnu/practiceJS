import React, { useRef } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const childRef = useRef();

    const handleClick = () => {
        if(childRef.current) {
            childRef.current.sayHello();
        }
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleClick}>Call Child Function</button>
      <ChildComponent ref={childRef}/>
    </div>
  )
}

export default ParentComponent
