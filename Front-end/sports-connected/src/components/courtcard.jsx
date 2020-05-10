import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SingleCourt from './singlecourt';

function CourtCard() {
    return <Container>
        <Card className="text-light modal-header">
            <Card.Body className="pb-0">
                <Card.Title>
                    <h2>SPORTO AIKSTELES</h2>
                </Card.Title>
                <Row>
                    <SingleCourt name="Mokyklos aisktele" url="https://picsum.photos/400/400?random=4" status="Uzklausa issiusta" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                    </SingleCourt>
                    <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                    </SingleCourt>
                </Row>
            </Card.Body>
        </Card>
    </Container>
}

export default CourtCard;