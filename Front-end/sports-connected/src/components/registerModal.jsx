import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import sha256 from 'js-sha256'

class RegisterModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShowReg = this.handleShowReg.bind(this);
        this.handleCloseReg = this.handleCloseReg.bind(this);
        this.state = {
            registerShow: false,
            name: '',
            surname: '',
            email: '',
            password: '',
            isUser: true,
            isTrainer: false,
            isSportGymAdmin: false,
            isSportGymCourtAdmin: false,
        }
    }
    registerUser() {
        if (this.state.name === '') {
            alert("Name field must not be empty!");
            return;
        }
        if (this.state.surname === '') {
            alert("Surname field must not be empty!");
            return;
        }
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
            Password: sha256(this.state.password),
            Name: this.state.name,
            Surname: this.state.surname,
            IsUser: this.state.isUser,
            IsTrainer: this.state.isTrainer,
            IsSportGymAdmin: this.state.isSportGymAdmin,
            IsSportGymCourtAdmin: this.state.isSportGymCourtAdmin
        }
        console.log(user);
        fetch("https://sportsconnectedback.azurewebsites.net/api/users/add",
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

    handleShowReg() {
        this.setState({ registerShow: true })
    }
    handleCloseReg() {
        this.setState({ registerShow: false })
    }
    render() {
        return (
            <div>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.registerShow}
                    onHide={this.handleCloseReg}>
                    <Modal.Header className="modal-header">
                        <Modal.Title className="text-bold text-uppercase">Registracija</Modal.Title>
                        <i className="close-button fas fa-times" alt="foto" onClick={() => this.setState({ registerShow: false })} />
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => this.registerUser()} >
                            <Form.Group className="" controlId="formGroupName">
                                <Form.Label>Vardas</Form.Label>
                                <Form.Control type="text" className="border-zero submit-text" placeholder="" onChange={e => this.setState({ name: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="" controlId="formGroupSurname">
                                <Form.Label>Pavarde</Form.Label>
                                <Form.Control type="text" className="border-zero submit-text" placeholder="" onChange={e => this.setState({ surname: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="" controlId="formGroupEmail">
                                <Form.Label>El. Pastas</Form.Label>
                                <Form.Control type="email" className="border-zero submit-text" placeholder="" onChange={e => this.setState({ email: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="" controlId="formGroupPassword">
                                <Form.Label>Slaptazodis</Form.Label>
                                <Form.Control type="password" className="border-zero submit-text text-bold" placeholder="" onChange={e => this.setState({ password: e.target.value })} />
                            </Form.Group>
                            <Row>
                                <Col sm="8">
                                </Col>
                                <Col sm=""></Col>
                                <Col sm="4">
                                    <Button className="float-right btn-loginsubmit text-bold text-uppercase" variant="link" type="submit">Registruotis</Button>
                                </Col>

                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default RegisterModal;