import React, { Component } from 'react';
import { Container, Navbar, Form } from "react-bootstrap";

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar expand="lg" className="navbar-color py-3">
                    <Container bsPrefix="container-fluid">
                        <Navbar.Brand href="/" className="brand-name "><p className="mb-0 text-bold text-light text-logo">SPORTS CONNECTED</p></Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;