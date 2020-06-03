import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleTrainer from './singletrainer';

function TrainerCard() {
    return <Container>
        <Card className="text-light modal-header">
            <Card.Body className="pb-0">
                <Card.Title>
                    <h2>TRENERIAI</h2>
                </Card.Title>
                <Row>
                    <div className="scrollmenu scrollmenu-trainer">
                        <SingleTrainer name="Jonas" url="https://picsum.photos/400/400?random=1" status="Uzklausa issiusta" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <SingleTrainer name="Petras" url="https://picsum.photos/400/400?random=2" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <SingleTrainer name="Dzekas" url="https://picsum.photos/400/400?random=3" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <SingleTrainer name="Dzekas" url="https://picsum.photos/400/400?random=3" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <SingleTrainer name="Dzekas" url="https://picsum.photos/400/400?random=3" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <SingleTrainer name="Dzekas" url="https://picsum.photos/400/400?random=3" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleTrainer>
                        <Card className="text-light modal-header menu-item single-gym">
                            <Card.Body>
                                <Card.Title className="text-center">
                                <i class="fas fa-plus fa-4x btn-addgymusr"></i>
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
    </Container>
}

export default TrainerCard;