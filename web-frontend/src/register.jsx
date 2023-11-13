import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
     
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", name, email, password);
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <Form onSubmit={HandleSubmit} >
      <h3>CREATE ACCOUNT</h3> <br></br>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Your Name" required 
         onChange={(e) => {
          setName(e.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter email" required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
         />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Password" required 
         onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree all statements in Terms of services" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        SIGN UP
      </Button> 
      <h6>Have already an account?<Link to="/login" style={{ color: 'skyblue' }}>Login Here</Link></h6>
    </Form>
  );
}

export default Register;    