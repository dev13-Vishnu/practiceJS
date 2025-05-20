import React, { useReducer, useState } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function ToDoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>📝 To-Do List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginTop: '10px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
