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
                    <div className="scrollmenu scrollmenu-court">
                        <SingleCourt name="Mokyklos aisktele" url="https://picsum.photos/400/400?random=4" status="Uzklausa issiusta" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <SingleCourt name="Nemuno salos kortas" url="https://picsum.photos/400/400?random=5" status="Aktyvus" >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint et rem facilis deleniti ipsum nulla.
                        </SingleCourt>
                        <Card className="text-light modal-header menu-item single-court">
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

export default CourtCard;