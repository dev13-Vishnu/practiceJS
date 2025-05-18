// ChildComponent.jsx
import React from 'react';

function ChildComponent({ msg }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Message: {msg}</p>
    </div>
  );
}

export default ChildComponent;
