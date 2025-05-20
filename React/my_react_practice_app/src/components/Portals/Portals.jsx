import React, { useState } from 'react'
import Modal from './Modal';

const Portals = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <h1>Main App Content</h1>
      <button onClick={() => setShowModal(true)}>Open Modal!</button>
      {showModal && <Modal onClose={() => setShowModal(false)}>Hello from Modal!</Modal>}
    </div>
  )
}

export default Portals;