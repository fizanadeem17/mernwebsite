import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'; 
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form");
    console.log("Email:", email, "Password:", password);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/register', { email, password });
      console.log(response.data); // Handle the success response
      // Redirect or perform any other actions on successful login
    navigate('/home');
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response received');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error occurred: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>LOGIN</h3> <br />
      {/* Email Input Field */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      {/* Password Input Field */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p style={{ color: 'whitesmoke' }}>Forgot Password?</p>
      {/* Login button*/}
      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'LOGIN'}
      </Button>
      <h6>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: 'skyblue' }}>
          Register
        </Link>
      </h6>
    </Form>
  );
}

export default Login;
