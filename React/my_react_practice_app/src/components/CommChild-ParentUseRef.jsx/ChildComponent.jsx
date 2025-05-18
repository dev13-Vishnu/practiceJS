import React, { forwardRef, useImperativeHandle } from 'react'

const ChildComponent = forwardRef((prop,ref) => {
    useImperativeHandle(ref,()=> ({
        sayHello() {
            alert('Hello from the Child Component!');
        }
    }));
    
  return <h2>I'm the Child Component</h2>
})

export default ChildComponent
