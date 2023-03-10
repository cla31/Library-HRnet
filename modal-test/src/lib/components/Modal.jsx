import React from 'react'
import PropTypes from 'prop-types';
import './styles/modal.css'

const Modal = ({ message, closeModal }) => {
  const render = () => {
    return (
      <div style={{ width: '100px', height: '100px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            style={{ fill: '#495811' }}
          />
        </svg>
      </div>
    )
  }
  return (
    <div className="modal">
      <div className="message-modal-button">
        {render()}
        <h1 className="message-modal">{message}</h1>
        <button className="button-modal" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  )
}
export default Modal

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired
}




