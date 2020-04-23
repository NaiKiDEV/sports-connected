import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import sha256 from 'js-sha256'

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            loginShow: false,
            email: '',
            password: ''
        }
    }

    loginUser() {
        if (this.state.email === '') {
            alert("Email field must not be empty!");
            return;
        }
        if (this.state.password === '') {
            alert("Password field must not be empty!");
            return;
        }
        const user = {
            Email: this.state.email,
            Password: sha256(this.state.password)
        }
        console.log(user);
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/validate",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    alert(a.message);
                    window.location.replace("/dashboard");
                } else {
                    alert(a.message);
                }
            });

    }

    handleShow() {
        this.setState({ loginShow: true })
    }
    handleClose() {
        this.setState({ loginShow: false })
    }
    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.loginShow} onSubmit={() => this.loginUser()} onHide={this.handleClose}>
                    <Modal.Header className="login-header">
                        <Modal.Title className="text-bold text-uppercase">Prisijungimas</Modal.Title>
                        <i className="close-button fas fa-times" alt="foto" onClick={() => this.setState({ loginShow: false })} />
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>El. Paštas</Form.Label>
                                <Form.Control type="email" className="border-zero submit-text" placeholder="" required onChange={e => this.setState({ email: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="" controlId="formGroupPassword">
                                <Form.Label>Slaptažodis</Form.Label>
                                <Form.Control type="password" className="border-zero submit-text text-bold" placeholder="" required onChange={e => this.setState({ password: e.target.value })} />
                            </Form.Group>
                            <Row>
                                <Col sm="8" className="pt-3">
                                    <a href="/forgot-password" ><p className="mb-0">Pamiršote slaptažodį?</p></a>
                                </Col>
                                <Col sm="4">
                                    <Button className="float-right btn-loginsubmit text-bold text-uppercase" variant="link" type="submit" >Prisijungti</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div >
        )
    }
}
export default LoginModal;