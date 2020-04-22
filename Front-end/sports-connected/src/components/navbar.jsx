import React, { Component } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import LoginModal from './LoginModal';
import RegisterModal from './registerModal';
import { Container, Navbar, Form, Button } from "react-bootstrap";


function NavbarUser(props) {
    //const isLoggedIn = props.isLoggedIn;
    if (props.isLoggedIn) {
        return <Form inline>
            <Button variant="danger" href="#" onClick={() => props.onLogoutClick()}>Atsijungti</Button>
        </Form>;
    }
    return <Form inline>
        <LoginButton onClick={props.onModalClick} />
        <RegisterButton onClick={props.onRegisterClick} />
    </Form>;
}

class NavBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoggedIn: false
        }
    }

    loginModalRef = ({ handleShow }) => {
        this.showModal = handleShow;
    }

    registerModalRef = ({ handleShowReg }) => {
        this.showModalReg = handleShowReg;
    }

    onLogoutClick = () => {
        this.setState({ isLoggedIn: false })
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
                        <Navbar.Brand href="/" className="brand-name "><p className="mb-0 text-bold text-light text-logo">SPORTS CONNECTED</p></Navbar.Brand>
                        <NavbarUser isLoggedIn={this.state.isLoggedIn} onModalClick={this.onModalClick} onRegisterClick={this.onRegisterClick} onLogoutClick={this.onLogoutClick} />
                    </Container>
                </Navbar>

                <LoginModal ref={this.loginModalRef} ></LoginModal>
                <RegisterModal ref={this.registerModalRef} ></RegisterModal>
            </div>
        );
    }
}

export default NavBar;