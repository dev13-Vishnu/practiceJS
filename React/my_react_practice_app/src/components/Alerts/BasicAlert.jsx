import React from 'react'

const BasicAlert = () => {
    const handleClick = () => {
        alert('This is a native JavaScrip Alert!');
    }
  return (
    <div style={{textAlign: 'center', marginTop:'40px'}}>
      <button
        onClick={handleClick}
      >
        Show Alert
    </button>
    </div>
  )
}

export default BasicAlert;