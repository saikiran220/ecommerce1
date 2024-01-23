import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const ModelPopup = ({modelshow,handleClose,titleheading,bodycontent}) => {
  console.log(handleClose)
  return (  
    
      //  <Modal.Dialog show={modelshow} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        
      //   <Modal.Header closeButton>
      //     <Modal.Title>{titleheading}</Modal.Title>
      //   </Modal.Header>

      //   <Modal.Body>
      //     <p>{bodycontent}</p>
      //   </Modal.Body>

      //   <Modal.Footer>
      //     <Button variant="secondary">Close</Button>
      //     <Button variant="primary">Save changes</Button>
      //   </Modal.Footer>
      // </Modal.Dialog>
      <Modal show={modelshow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titleheading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodycontent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
  
    
  )
}

export default ModelPopup
