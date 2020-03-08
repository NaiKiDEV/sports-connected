import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LoginButton extends Component {
    state = {}
    render() {
        return (
            <Button variant="success" className="mx-1 btn-navbar">Login</Button>
        );
    }
}

export default LoginButton;