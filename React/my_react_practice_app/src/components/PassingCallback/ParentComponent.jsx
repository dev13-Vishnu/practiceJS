import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [dataFromChild, setDataFromChild] = useState('');

    const handleChildData = (value) => {
        setDataFromChild(value);
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent onSendData={handleChildData}/>
    </div>
  )
}

export default ParentComponent
