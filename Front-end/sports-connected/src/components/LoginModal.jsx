import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

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
        fetch("https://localhost:44316/api/users/validate",
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
                    show={this.state.loginShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Prisijungimas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="" controlId="formGroupEmail">
                            <Form.Label>El. Pastas</Form.Label>
                            <Form.Control type="email" placeholder="" onChange={e => this.setState({ email: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupPassword">
                            <Form.Label>Slaptazodis</Form.Label>
                            <Form.Control type="password" placeholder="" onChange={e => this.setState({ password: e.target.value })} />
                        </Form.Group>
                        <Row>
                            <Col sm="8" className="pt-3">
                                <a href="#" ><p className="mb-0">Pamirsote slaptazodi?</p></a>
                            </Col>
                            <Col sm=""></Col>
                            <Col sm="4">
                                <Button className="float-right" variant="success" onClick={() => this.loginUser()}>Prisijungti</Button>
                            </Col>

                        </Row>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default LoginModal;