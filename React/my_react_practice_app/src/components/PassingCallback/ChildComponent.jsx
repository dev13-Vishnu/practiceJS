import React from 'react'

const ChildComponent = ({onSendData}) => {
    const sendMessage = () => {
        onSendData('Hello from Child!');
    };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendMessage}>Send Message to Parent</button>
    </div>
  )
}

export default ChildComponent
