//import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Popup.css";

function Example({show, setShow, title, setTitle, body, setBody}) {

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <><div className='modal-container'>
      <Modal
        className='modal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        title={setTitle}
        body={setBody}
      >
        <Modal.Header closeButton className='border-0'>
          <Modal.Title className='title-text'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body-text'>
          {body}
        </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose} className='close-btn btn-close-white'>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

export default Example;