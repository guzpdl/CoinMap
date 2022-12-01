import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import authAxios from "../../services/authAxios.service";
import "./SignUp.css"

const RegistryModal = () => {
  const [newUser, setNewUser] = useState({});

  // ------ MODAL BOOTSTRAP -----
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const createNewUser = (eventHTML) => {
    eventHTML.preventDefault();
    authAxios.registry(newUser).then((response) => {
      console.log(response);
    });
  };

  const updateNewUser = (eventHTML) => {
    const { name, value } = eventHTML.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Sign up
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title className="signup">Sign up to CoinMap</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={createNewUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="signup">Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={updateNewUser}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="signup">Username</Form.Label>
              <Form.Control
                type="username"
                name="username"
                onChange={updateNewUser}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="signup">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={updateNewUser}
                autoFocus
              />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleClose}>
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegistryModal;
