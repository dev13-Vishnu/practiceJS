import React, { useState } from 'react';

function CustomAlert() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <button onClick={() => setShow(true)}>Trigger Alert</button>
      
      {show && (
        <div style={{
          marginTop: '20px',
          marginLeft: '20px',
          padding: '15px',
          backgroundColor: '#f44336',
          color: 'white',
          borderRadius: '8px',
          display: 'inline-block',
        }}>
          🚨 This is a custom alert!
          <button onClick={() => setShow(false)} style={{
            marginLeft: '20px',
            background: 'white',
            color: '#f44336',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomAlert;