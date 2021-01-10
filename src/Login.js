import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className="login-section">
            <Form className="login-form">
            <div className="login-container">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Id</Form.Label>
                    <Form.Control type="email" placeholder="Enter id" />
                    <Form.Text className="text-muted">
                    We'll never share your id with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="button" variant="success" type="submit">
                    Log In
                </Button>
            </div>
        </Form>
            <div className="back">
                <a href="/home">Back to home page</a>
            </div>
        </div>
    );
};

export default Login;