import React, { Component } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import LoginModal from './LoginModal';
import RegisterModal from './registerModal';
import { Container, Navbar, Form } from "react-bootstrap";

class NavBar extends Component {
    loginModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    registerModalRef = ({ handleShowReg }) => {
        this.showModalReg = handleShowReg;
    }

    onModalClick = () => {
        this.showModal();
    }

    onRegisterClick = () => {
        this.showModalReg();
    }

    render() {
        return (
            <div>
                <Navbar expand="lg" className="navbar-color py-3">
                    <Container bsPrefix="container-fluid">
                        <Navbar.Brand href="#" className="brand-name "><p className="mb-0 text-bold text-light text-logo">SPORTS CONNECTED</p></Navbar.Brand>
                        <Form inline>
                            <LoginButton onClick={this.onModalClick} />
                            <RegisterButton onClick={this.onRegisterClick} />
                        </Form>
                    </Container>
                </Navbar>
                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <RegisterModal ref={this.registerModalRef} ></RegisterModal>
            </div>
        );
    }
}

export default NavBar;