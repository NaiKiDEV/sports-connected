import React, { Component } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import { Container, Navbar, Form } from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (

            <Navbar expand="lg" className="navbar-color py-3">
                <Container bsPrefix="container-fluid">
                    <Navbar.Brand href="#" className="brand-name "><p className="mb-0 text-bold text-light text-logo">SPORTS CONNECTED</p></Navbar.Brand>
                    <Form inline>
                        <LoginButton />
                        <RegisterButton />
                    </Form>
                </Container>
            </Navbar>

        );
    }
}

export default NavBar;