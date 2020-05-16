import React, { Component } from 'react';

//import Button from 'react-bootstrap/Button';

class LoginButton extends Component {

    render() {
        return (
            <>
                <a className="mx-1 mr-2 btn-login text-uppercase" href="#"
                    onClick={this.props.onClick}>PRISIJUNGTI</a>
            </>
        );
    }
}

export default LoginButton;
