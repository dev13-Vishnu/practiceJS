import React, { useState } from 'react'

const MatchInputs = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [isMatch, setIsMatch] = useState(null);

    const handleCheck = () => {
        setIsMatch(input1 === input2);
    };

  return (
    <div style={{textAlign: 'center', marginTop: '40px',}}>
        <h2>Match Input Checker</h2>
        <input
            type='text'
            placeholder='Enter text'
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{margin: '10px'}}
        />
        <br />
        <input 
            type="text"
            placeholder='Confirm text'
            value={input2}
            onChange={(e) =>setInput2(e.target.value)}
            style={{margin: '10px'}}
        />
        <br />
        <button onClick={handleCheck}>Check Match</button>
        {isMatch !== null && (
            <p style={{color: isMatch ? 'green': 'red', marginTop: '10px'}}>
                {isMatch ? 'Inputs Match ✅': 'Inputs Do Not Match ❌'}
            </p>
        )}
    </div>
  )
}

export default MatchInputs