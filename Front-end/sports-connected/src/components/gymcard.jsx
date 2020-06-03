import React, { useState, useHistory, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Form, Button, Accordion } from 'react-bootstrap';
import SingleGym from './singlegym';
import SingleGymOffer from './singlegymoffer';

function GymCard() {

    const [modalOpen, setmodalOpen] = useState(false);
    const [gyms, setGyms] = useState([]);
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

    function GetAllGyms() {
        fetch("https://sportsconnectedback.azurewebsites.net/api/gyms",
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
                    setGyms(returnResult);
                    //return returnResult.forEach(element => <SingleGym name={element.title} url={element.ImageUrl} status="Laukiama pavedimo" ></SingleGym>
                } else {
                    alert(a.message);
                }
            });
    }

    useEffect(() => {
        GetAllOffers();
        GetAllGyms();
    }, []);

    return <Container className="pr-0">
        <Card className="text-light modal-header">
            <Card.Body className="pb-0">
                <Card.Title>
                    <h2>SPORTO SALES</h2>
                </Card.Title>
                <Row>
                    <div className="scrollmenu scrollmenu-gym">
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
        <TakeOfferModal isOpen={modalOpen} onModalClick={() => openModal()} gymOffers={offers} gymArray={gyms} ></TakeOfferModal>
    </Container >
}


function DisplayOffers(props) {
    var filteredArray = props.offersArray.filter(e => e.gymId === props.filterKey);
    //console.log(filteredArray);
    return filteredArray.map(element =>
        <Card
            //onClick={() => props.setKey(element.id)}
            className="border-zero"
        >
            <Accordion.Collapse eventKey="0">
                <Card.Body className="px-0 py-0">
                    <Row className="pl-4 mb-0 w-100 offers_select mx-0 py-2">
                        <Col sm={8}>
                            <h6 className="text-white">{element.title}</h6>
                        </Col>
                        <Col sm={4} className="">
                            <h6 className="text-white text-right">{element.price} €</h6>
                        </Col>

                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

function DisplayAllGymData(props) {
    var randkey = 0;
    console.log(props.gymArray);
    return props.gymArray.map(element => {
        var randkeyVal = randkey.toString();
        randkey++;
        return <Card onClick={() => props.setKey(element.id)} className="border-zero">
            <Accordion.Collapse eventKey="0">
                <Card.Body className="px-0 py-0">
                    <Row className="px-4 mb-0 w-100 offers_select mx-0 py-2">
                        <Col sm={4}>
                            <h6 className="text-white">{element.title}</h6>
                        </Col>
                        <Col sm={4} className="">
                            <h6 className="text-white text-center">{element.fullAdress}</h6>
                        </Col>
                        <Col sm={4} className="text-white text-right">
                            <h6 className="">{element.offers.length} pasiūlymai</h6>
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    }

    );
}

function DisplayGyms(props) {
    return <div>
        <Accordion >
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <h4 className="text-white">Salės</h4>
            </Accordion.Toggle>
            <DisplayAllGymData gymArray={props.gymArray} setKey={props.setKey}></DisplayAllGymData>
        </Accordion>
    </div>
}


function TakeOfferModal(props) {
    const [selectedKey, setKey] = useState([]);
    const [selectedOffer, setOffer] = useState([]);
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.isOpen}
            size="lg"
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
                        <Col sm="12" className="px-0">
                            <DisplayGyms gymArray={props.gymArray} setKey={setKey}></DisplayGyms>
                        </Col>
                        <Col sm="12" className="px-0">
                            <Accordion >
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <h4 className="text-white">Pasiūlymai</h4>
                                </Accordion.Toggle>
                                <DisplayOffers offersArray={props.gymOffers} filterKey={selectedKey}></DisplayOffers>
                            </Accordion>
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