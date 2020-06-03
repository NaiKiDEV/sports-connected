import React, { useState, useHistory, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Form, Button } from 'react-bootstrap';
import SingleGym from './singlegym';
import SingleGymOffer from './singlegymoffer';

function GymCard() {

    const [modalOpen, setmodalOpen] = useState(false);
    const [offers, setOffers] = useState([]);

    function openModal() {
        setmodalOpen(!modalOpen);
    }

    function GetAllOffers() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/offers",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(a => {
                if (a.error === false) {
                    const { returnResult } = a;
                    console.log(returnResult);
                    setOffers(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    useEffect(() => {
        GetAllOffers();
    }, []);

    return <Container className="pr-0">
        <Card className="text-light modal-header">
            <Card.Body className="pb-0">
                <Card.Title>
                    <h2>SPORTO SALES</h2>
                </Card.Title>
                <Row>
                    <div className="scrollmenu">
                        <SingleGym name="Gym+" url="https://picsum.photos/400/400?random=6" status="Laukiama pavedimo" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <SingleGym name="VSFitness" url="https://picsum.photos/400/400?random=7" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <SingleGym name="Sport Club" url="https://picsum.photos/400/400?random=8" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <SingleGym name="Sport Club" url="https://picsum.photos/400/400?random=8" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <SingleGym name="Sport Club" url="https://picsum.photos/400/400?random=8" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <SingleGym name="Sport Club" url="https://picsum.photos/400/400?random=8" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleGym>
                        <Card className="text-light modal-header menu-item single-gym">
                            <Card.Body>
                                <Card.Title className="text-center">
                                <i class="fas fa-plus fa-4x btn-addgymusr" onClick={() => openModal()}></i>
                                </Card.Title>
                                <Container className="text-center">
                                    <Row className="mt-4">
                                        <Col >
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Card.Body>
        </Card>
        <TakeOfferModal isOpen={modalOpen} onModalClick={() => openModal()} gymOffers={offers}></TakeOfferModal>
    </Container >
}


function DisplayOffers(props) {
    return props.offersArray.map(element =>
        <div>
            <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                <Col sm={8}>
                    <h4 className="text-white">{element.title}</h4>
                </Col>
                <Col sm={4} className="">
                    <h4 className="text-white">{element.price} €</h4>
                </Col>
                <Col sm={8} className="text-center offset-2">
                    <h5 className="">{element.description}</h5>
                </Col>
            </Row>
        </div>
    );
}


function TakeOfferModal(props) {

    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.isOpen}
            //show={true}
            //onSubmit={() => loginUser()}
            onHide={props.onModalClick}>
            <Modal.Header className="login-header">
                <Modal.Title className="text-bold text-uppercase">Nusipirkti naryste</Modal.Title>
                <i className="close-button fas fa-times" alt="foto" onClick={props.onModalClick} />
            </Modal.Header>
            <Modal.Body className="modal-content">
                <Form>
                    <Row className="">
                        <Col sm="12">
                            <DisplayOffers offersArray={props.gymOffers}></DisplayOffers>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Button className="float-right btn-add text-uppercase" variant="link" type="button">Užsisakyti</Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal >
    );
}

export default GymCard;