import React, { useState } from "react";

import './Modal.scss';

import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalWindow = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div className="App">
          <button onClick={toggleModal}>Open modal</button>
    
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
            <div>My modal dialog.</div>
            <button onClick={toggleModal}>Close modal</button>
          </Modal>
        </div>
      );

}

export default ModalWindow;