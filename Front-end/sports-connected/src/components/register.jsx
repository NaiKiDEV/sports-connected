import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class RegisterButton extends Component {
    state = {}
    render() {
        return (
            <Button variant="info" className="mx-1 btn-navbar">Register</Button>
        );
    }
}

export default RegisterButton;