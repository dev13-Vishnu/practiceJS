import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({children, onClose}) => {
    return ReactDOM. createPortal(
        <div className="modal" style={modalStyle}>
            <div className="modal-content" style={modalContentStyle}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('portal-root')
    )
}


const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px'
  }


export default Modal;
