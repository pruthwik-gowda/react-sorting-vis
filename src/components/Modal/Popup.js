//import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Popup.css";

function Example({show, setShow, title, setTitle, body, setBody}) {

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        className='modal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        title={setTitle}
        body={setBody}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;