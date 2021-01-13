import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './Login';

const ModalLogin= (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Login/signin</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>SHIHOMES</ModalHeader>
        <ModalBody>
        <Login dismiss={toggle} set={props.set}/>
        </ModalBody>

      </Modal>
    </div>
  );
}

export default ModalLogin;