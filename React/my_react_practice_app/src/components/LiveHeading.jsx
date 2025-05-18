import React, { useState } from 'react'

const LiveHeading = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }
  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <input 
        type="text" 
        placeholder='Type Something...'
        onChange={handleChange}
        value={text}
        style={{ padding: '8px', fontSize: '16px'}}
    />
    <h1>{text}</h1>
    </div>
  )
}

export default LiveHeading
