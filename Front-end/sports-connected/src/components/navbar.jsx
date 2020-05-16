import React, { Component, useHistory } from 'react';
import LoginButton from "./login";
import RegisterButton from "./register";
import LoginModal from './LoginModal';
import RegisterModal from './registerModal';
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import ProfileIcon from './navbarProfile';
import AlertBox from './alertbox';


function NavbarUser(props) {
    const { isLoggedIn } = useSelector(state => state.user);
    if (isLoggedIn) {
        return <Form inline>
            <ProfileIcon></ProfileIcon>
        </Form>;
    }
    return <Form inline>
        <LoginButton onClick={props.onModalClick} />
        <RegisterButton onClick={props.onRegisterClick} />
    </Form>;
}

function NavAlert(props) {
    const { errorName } = useSelector(state => state.user);
    return <AlertBox message={errorName} isOpen={props.isOpen}></AlertBox>
}

class NavBar extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoggedIn: false,
            loginModal: false,
            registerModal: false,
            alertShow: false,
            errorMessage: ""
        }
    }
    onModalClick = () => {
        this.setState({ loginModal: !this.state.loginModal });
    }

    onRegisterClick = () => {
        this.setState({ registerModal: !this.state.registerModal });
    }

    onAlertClick = () => {
        this.setState({ alertShow: true });
        setTimeout(() => this.setState({ alertShow: false }), 2000);
    }
    onAlertCloseClick = () => {
        this.setState({ alertShow: false });
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
                    isOpen={this.state.loginModal}
                    onAlertClick={this.onAlertClick} />

                <RegisterModal
                    onModalClick={this.onRegisterClick}
                    isOpen={this.state.registerModal}
                    onAlertClick={this.onAlertClick} />

                <div onClick={this.onAlertCloseClick}>
                    <NavAlert isOpen={this.state.alertShow}></NavAlert>
                </div>

            </div >
        );
    }
}

export default NavBar;