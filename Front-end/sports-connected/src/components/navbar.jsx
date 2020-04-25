import React, { Component } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import LoginModal from './LoginModal';
import RegisterModal from './registerModal';
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import ProfileIcon from './navbarProfile';


function NavbarUser(props) {
    const isLogged = useSelector(state => state.isLogged);
    //const isLoggedIn = props.isLoggedIn;
    if (isLogged) {
        return <Form inline>
            <ProfileIcon></ProfileIcon>
            {/*
            <Button variant="danger" href="#" onClick={() => dispatch({
                type: "LOGOUTUSER"
            })}>Atsijungti</Button>
             */}
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
            isLoggedIn: false,
            loginModal: false,
            registerModal: false
        }
    }
    onModalClick = () => {
        this.setState({ loginModal: !this.state.loginModal });
    }

    onRegisterClick = () => {
        this.setState({ registerModal: !this.state.registerModal });
    }


    render() {
        return (
            <div>
                <Navbar expand="lg" className="navbar-color py-3">
                    <Container fluid>
                        <Navbar.Brand href="/" className="brand-name "><p className="mb-0 text-bold text-light text-logo">SPORTS CONNECTED</p></Navbar.Brand>
                        <NavbarUser onModalClick={this.onModalClick} onRegisterClick={this.onRegisterClick} onLogoutClick={this.onLogoutClick} />
                    </Container>
                </Navbar>

                <LoginModal
                    onModalClick={this.onModalClick}
                    isOpen={this.state.loginModal} />

                <RegisterModal
                    onModalClick={this.onRegisterClick}
                    isOpen={this.state.registerModal} />
            </div>
        );
    }
}

export default NavBar;