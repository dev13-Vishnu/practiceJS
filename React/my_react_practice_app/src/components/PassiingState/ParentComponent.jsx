// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent msg={message} />
    </div>
  );
}

export default ParentComponent;
