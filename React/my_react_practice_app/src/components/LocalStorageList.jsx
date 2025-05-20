import React, { useEffect, useState } from 'react'

const LocalStorageList = () => {

    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('myItems');
        return saved ? JSON.parse(saved): [];
    });
    const [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('myItems', JSON.stringify(items));
    }, [items]);

    const addItem = () => {
        if(input.trim()) {
            setItems([...items, input.trim()]);
            setInput('');
        }
    };

    const removeItem = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
    }

  return (
    <div style={{padding: '20px', maxWidth:'400px', margin:'auto'}}>
      <h2>LocalStorage List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder = "Enter item..."
        style={{padding:'8px', width: '70%'}}
      />
      <button
        onClick={addItem}
        style={{marginLeft: '10px'}}
      >
        Add
    </button>
    <ul style={{marginTop: '20px'}}>
        {items.map((item, index) => (
            <li
                key={index}
                style={{marginBottom: '10px'}}
            >
                {item}
                <button
                    onClick={() => removeItem(index)}
                    style={{marginLeft: '10px', color: 'red'}}
                >
                    Remove
                </button>

            </li>
         ))} 

    </ul>
     
    </div>
  )
}

export default LocalStorageList
