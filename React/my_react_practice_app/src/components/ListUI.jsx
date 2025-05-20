import React from 'react'

const ListUI = () => {
    const items = ['React', 'JavaScript', 'HTML', 'CSS'];
  return (
    <div style={{padding: '20px', maxWidth: '400px', margin: 'auto'}}>
      <h2>📃 My Skills</h2>
      <ul>
        {items.map((item, index) => (
            <li key={index} style={{marginBottom: '8px'}}>
                ✅ {item}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ListUI
