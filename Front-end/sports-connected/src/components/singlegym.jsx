import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SingleGym(props) {
    return <Card className="text-light modal-header menu-item">
        <Card.Body>
            <Card.Title className="text-center">
                <img src={props.url} alt="" className="trainer-logo" />
            </Card.Title>
            <Container className="text-center">
                <Row >
                    <Col>
                        {props.name}
                    </Col>
                </Row>
                <Row >
                    <Col >
                        {props.status}
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col >
                        Aktyvi iki 2020-07
                    </Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
}

export default SingleGym;