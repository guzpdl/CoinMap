import React, { useState } from 'react';
import {  useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import authAxios from '../../services/authAxios.service'
import "./Login.css"

const LogInModal = () => {
  const [user, setUser] = useState({});
  const { storeToken, authentication } = useContext(AuthContext);


  const login = (eventHTML) => {
    eventHTML.preventDefault();
    authAxios.login(user).then((response) => {
      console.log(response);  
      storeToken(response.token);
      authentication();
    })
  };

  const updateUser = (eventHTML) => {
    const { value, name } = eventHTML.target;
    setUser({ ...user, [name]: value });
  };  
  
  // --------------- MODAL BOOTSTRAP -------------
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    return(

    <>
  <Nav.Link variant="primary" onClick={handleShow}>
    Log in
  </Nav.Link>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title className='login'>Log in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='login'>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={updateUser}
            name='email'
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='login'>Password</Form.Label>
          <Form.Control
            type="password"
            name='password'
            onChange={updateUser}
            autoFocus
          />
        </Form.Group>
      <Button variant="dark" type='submit' onClick={handleClose}>
        Log in
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
)
}

export default LogInModal

