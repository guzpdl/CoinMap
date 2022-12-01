import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import userAxios from '../../services/userAxios.service'
import "./EditProfile.css"



const EditProfileModal = ({user}) => {


    const {id}  = useParams()
    const navigate  = useNavigate()

    const [userData, setUser] = useState(user)




    const updateNewUSer = (eventHTML) => {
        const {value, name} = eventHTML.target;
        setUser({...userData, [name]: value})
    }


    const updateUser = (eventHTML) => {
        eventHTML.preventDefault();
        userAxios.editProfile(user._id, userData).then(() => {
          navigate(`/profile/${user._id}`);
        })
      }

//  ------------------ MODAL TOOLS BOOTSTRAP ----------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit your profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="edit">Edit your data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit">Email address</Form.Label>
              <Form.Control
                name='email'
                type="email"
                onChange={updateNewUSer}
                value={userData.email}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="edit">Username</Form.Label>
              <Form.Control
                name='username'
                type="text"
                onChange={updateNewUSer}
                value={userData.username}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="edit">Password</Form.Label>
              <Form.Control
                name='password'
                type="password"
                onChange={updateNewUSer}
                value={userData.password}
                autoFocus
              />
            </Form.Group>
          <Button variant="dark" type='submit' onClick={handleClose}>
            Save Changes
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

}

export default EditProfileModal