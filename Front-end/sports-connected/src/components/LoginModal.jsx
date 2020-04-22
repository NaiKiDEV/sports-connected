import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

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
        const user = {
            Email: this.state.email,
            Password: this.state.password
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
            })
            .then(
                //window.location.replace("/dashboard"),
            );

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
                    show={this.state.loginShow} onHide={this.handleClose}>
                    <Modal.Header className="login-header">
                        <Modal.Title className="text-bold text-uppercase">Prisijungimas</Modal.Title>
                        <i className="close-button fas fa-times" alt="foto" onClick={() => this.setState({ loginShow: false })} />
                    </Modal.Header>
                    <Modal.Body className="modal-content">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>El. Paštas</Form.Label>
                            <Form.Control type="email" className="border-zero submit-text" placeholder="" onChange={e => this.setState({ email: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupPassword">
                            <Form.Label>Slaptažodis</Form.Label>
                            <Form.Control type="password" className="border-zero submit-text text-bold" placeholder="" onChange={e => this.setState({ password: e.target.value })} />
                        </Form.Group>
                        <Row>
                            <Col sm="8" className="pt-3">
                                <a href="#" ><p className="mb-0">Pamiršote slaptažodį?</p></a>
                            </Col>
                            <Col sm="4">
                                <Button className="float-right btn-loginsubmit text-bold text-uppercase" variant="link" onClick={() => this.loginUser()}>Prisijungti</Button>
                            </Col>

                        </Row>

                    </Modal.Body>
                </Modal>
            </div >
        )
    }
}
export default LoginModal;