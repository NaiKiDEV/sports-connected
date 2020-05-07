import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleGym from './singlegym';

function GymCard() {
    return <Container>
        <Card className="text-light modal-header">
            <Card.Body className="h-200">
                <Card.Title>
                    <h2>SPORTO SALES</h2>
                </Card.Title>
                <Row>
                    <SingleGym name="Gym+" url="https://picsum.photos/400/400?random=1" status="Laukiama pavedimo" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                    </SingleGym>
                    <SingleGym name="VSFitness" url="https://picsum.photos/400/400?random=2" status="Aktyvus" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                    </SingleGym>
                    <SingleGym name="Sport Club" url="https://picsum.photos/400/400?random=3" status="Aktyvus" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                    </SingleGym>
                </Row>
            </Card.Body>
        </Card>
    </Container>
}

export default GymCard;