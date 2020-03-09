import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class RegisterButton extends Component {
    state = {}
    render() {
        return (
            <Button variant="link" className="mx-1 btn-navbar btn-register text-dark">REGISTER</Button>
        );
    }
}

export default RegisterButton;