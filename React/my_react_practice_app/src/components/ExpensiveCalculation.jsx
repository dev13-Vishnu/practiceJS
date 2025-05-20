import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number * number;
    }
    return result;
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center"
  };

  return (
    <div style={theme}>
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value || 0))}
      />
      <button onClick={() => setDark(prev => !prev)} style={{ marginLeft: '10px' }}>
        Toggle Theme
      </button>
      <h3>Squared Result: {squaredNumber}</h3>
    </div>
  );
}

export default ExpensiveCalculation;
