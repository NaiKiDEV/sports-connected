import React, { Component } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import { Container, Navbar, Form } from "react-bootstrap";

class NavBar extends Component {
    render() {
        return (

            <Navbar expand="lg" variant="dark" bg="danger">
                <Container>
                    <Navbar.Brand href="#" className="brand-name"> <i className="fas fa-dumbbell navbar-logo mr-1"></i>  Sports Connected</Navbar.Brand>
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