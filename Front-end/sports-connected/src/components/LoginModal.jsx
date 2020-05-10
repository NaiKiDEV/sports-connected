import React, { Component, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import sha256 from 'js-sha256';
import { useDispatch } from 'react-redux';
import logUser from '../actions/loginAction';
import setData from '../actions/userDataAction';
import { useHistory } from 'react-router-dom';
import setError from '../actions/errorSet';


function LoginModal(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    function loginUser() {
        if (email === '') {
            alert("Email field must not be empty!");
            return;
        }
        if (password === '') {
            alert("Password field must not be empty!");
            return;
        }
        const user = {
            Email: email,
            Password: sha256(password)
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
                    const { returnResult } = a;
                    alert(a.message);
                    console.log(a);
                    dispatch(logUser(true));
                    dispatch(setData({
                        email: returnResult.email,
                        id: returnResult.id,
                        isSportGymAdmin: returnResult.isSportGymAdmin,
                        isSportGymCourtAdmin: returnResult.isSportGymCourtAdmin,
                        isTrainer: returnResult.isTrainer,
                        isUser: returnResult.isUser,
                        name: returnResult.name,
                        surname: returnResult.surname
                    }));
                    props.onModalClick();
                    history.push("/dashboard");
                } else {
                    alert(a.message);
                    dispatch(setError(a.message));
                    props.onAlertClick();
                }
            });
    }

    return (
        <div>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={props.isOpen}
                onSubmit={() => loginUser()}
                onHide={props.onModalClick}>
                <Modal.Header className="login-header">
                    <Modal.Title className="text-bold text-uppercase">Prisijungimas</Modal.Title>
                    <i className="close-button fas fa-times" alt="foto" onClick={props.onModalClick} />
                </Modal.Header>
                <Modal.Body className="modal-content">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>El. Paštas</Form.Label>
                            <Form.Control type="email" className="border-zero submit-text" placeholder="" required onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupPassword">
                            <Form.Label>Slaptažodis</Form.Label>
                            <Form.Control type="password" className="border-zero submit-text text-bold" placeholder="" required onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Row>
                            <Col sm="8" className="pt-3">
                                <a href="#" onClick={() => history.push("/forgot-password")} ><p className="mb-0">Pamiršote slaptažodį?</p></a>
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
export default LoginModal;