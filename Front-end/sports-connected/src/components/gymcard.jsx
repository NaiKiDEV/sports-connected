import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleGym from './singlegym';

function GymCard() {
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
                        <div className="d-inline-flex justify-content-center align-item-center">
                            <i class="fas fa-plus fa-4x btn-addgymusr"></i>
                        </div>
                    </div>
                </Row>
            </Card.Body>
        </Card>
    </Container >
}

export default GymCard;