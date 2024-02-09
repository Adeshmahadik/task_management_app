import React from 'react'

const Modal = ({setShowModal, showModal, children}) => {
  return (
    <div className="modal-container">
    <div className="modal-content">
      <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
   <div style={{top: "20px", position:"relative", width:"100%" }}>{children}</div>
    </div>
  </div>
  )
}

export default Modal