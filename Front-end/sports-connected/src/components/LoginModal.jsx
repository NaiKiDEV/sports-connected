import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        }
    }
    handleShow() {
        this.setState({ show: true })
    }
    handleClose() {
        this.setState({ show: false })
    }
    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Prisijungimas</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="" controlId="formGroupEmail">
                            <Form.Label>El. Pastas</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupPassword">
                            <Form.Label>Slaptazodis</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                        <Row>
                            <Col sm="8" className="pt-3">
                                <a href="#" ><p className="mb-0">Pamirsote slaptazodi?</p></a>
                            </Col>
                            <Col sm=""></Col>
                            <Col sm="4">
                                <Button className="float-right" variant="success">Prisijungti</Button>
                            </Col>

                        </Row>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
export default LoginModal;