import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import "./styles.css";
import "../../../Content/css/bootstrap.min.css";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group controlId="formBasicMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="mobileNumber" placeholder="Enter mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me!" />
      </Form.Group>
      <br></br>
      <Button variant="primary" type="submit" block>
        Login
      </Button>
    </Form>
  );
};

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}