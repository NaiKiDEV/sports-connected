import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddOfferModal(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [gymid, setGymid] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    function addOffer() {
        if (title === '') {
            alert("Title field must not be empty!");
            return;
        }
        if (description === '') {
            alert("Description field must not be empty!");
            return;
        }
        if (price === '') {
            alert("Price field must not be empty!");
            return;
        }
        const offer = {
            Title: title,
            Description: description,
            Price: price,
            GymId: props.gymId
        }

        console.log(offer);
        fetch("https://sportsconnectedback.azurewebsites.net/api/offers",
            {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(offer)
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    const { returnResult } = a;
                    console.log(a);
                    props.onModalClick();
                    window.location.reload();
                } else {
                    alert(a.message);
                }
            });
    }

    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.isOpen}
            //show={true}
            //onSubmit={() => loginUser()}
            onHide={props.onModalClick}>
            <Modal.Header className="login-header">
                <Modal.Title className="text-bold text-uppercase">Prideti pasiulyma</Modal.Title>
                <i className="close-button fas fa-times" alt="foto" onClick={props.onModalClick} />
            </Modal.Header>
            <Modal.Body className="modal-content">
                <Form>
                    <Form.Group controlId="formGroupTitle">
                        <Form.Label>Pavadinimas</Form.Label>
                        <Form.Control type="text" className="border-zero submit-text" placeholder="" required onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="" controlId="formGroupPassword">
                        <Form.Label>Aprasymas</Form.Label>
                        <Form.Control type="text" className="border-zero submit-text" placeholder="" required onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="" controlId="formGroupPrice">
                        <Form.Label>Kaina</Form.Label>
                        <Form.Control type="textarea" className="border-zero submit-text" placeholder="" required onChange={e => setPrice(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="" controlId="formGroupId">
                        <Form.Label>Sales Id</Form.Label>
                        <Form.Control disabled type="text" className="border-zero submit-text" placeholder={props.gymId} required onChange={e => setGymid(props.gymId)} />
                    </Form.Group>
                    <Row>
                        <Col sm="12">
                            <Button className="float-right btn-loginsubmit text-uppercase" variant="link" type="button" onClick={() => addOffer()} >Prideti</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal >
    );
}


export default AddOfferModal;