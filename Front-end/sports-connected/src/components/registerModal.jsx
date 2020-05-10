import React, { Component, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import sha256 from 'js-sha256';
import { useDispatch } from 'react-redux';
import setError from '../actions/errorSet';

function RegisterModal(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [isUser, setUser] = useState(true);
    const [isTrainer, setTrainer] = useState(false);
    const [isSportGymAdmin, setGymAdmin] = useState(false);
    const [isSportGymCourtAdmin, setCourtAdmin] = useState(false);

    function registerUser() {
        if (name === '') {
            alert("Name field must not be empty!");
            return;
        }
        if (surname === '') {
            alert("Surname field must not be empty!");
            return;
        }
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
            Password: sha256(password),
            Name: name,
            Surname: surname,
            IsUser: isUser,
            IsTrainer: isTrainer,
            IsSportGymAdmin: isSportGymAdmin,
            IsSportGymCourtAdmin: isSportGymCourtAdmin
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
                    props.onModalClick();
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
                onHide={props.onModalClick}>
                <Modal.Header className="modal-header">
                    <Modal.Title className="text-bold text-uppercase">Registracija</Modal.Title>
                    <i className="close-button fas fa-times" alt="foto" onClick={props.onModalClick} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={() => registerUser()} >
                        <Form.Group className="" controlId="formGroupName">
                            <Form.Label>Vardas</Form.Label>
                            <Form.Control type="text" className="border-zero submit-text" placeholder="" onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupSurname">
                            <Form.Label>Pavarde</Form.Label>
                            <Form.Control type="text" className="border-zero submit-text" placeholder="" onChange={e => setSurname(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupEmail">
                            <Form.Label>El. Pastas</Form.Label>
                            <Form.Control type="email" className="border-zero submit-text" placeholder="" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="" controlId="formGroupPassword">
                            <Form.Label>Slaptazodis</Form.Label>
                            <Form.Control type="password" className="border-zero submit-text text-bold" placeholder="" onChange={e => setPassword(e.target.value)} />
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

export default RegisterModal;