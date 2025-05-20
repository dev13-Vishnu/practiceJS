import React, { useState, useCallback } from 'react';

function Child({ onIncrement }) {
  console.log('🔄 Child re-rendered');
  return (
    <button onClick={onIncrement}>
      Increment from Child
    </button>
  );
}

const MemoizedChild = React.memo(Child);

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
    // console.log('Parent re-rendered')
  // Without useCallback: new function every render ➝ child re-renders
  // With useCallback: same function unless dependencies change
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to re-render parent"
      />
      <MemoizedChild onIncrement={handleIncrement} />
    </div>
  );
}

export default Parent;
