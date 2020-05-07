import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function MembershipCard() {
    return (
        <div>
            <Card className="text-light modal-header">
                <Card.Body>
                    <Card.Title>
                        <h2>NARYSTES</h2>
                    </Card.Title>
                    <Container>
                        <Row className="mb-2">
                            <Col >
                                GYM+ - <span className="text-success">aktyvus</span>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col >
                                VSFITNESS - <span className="text-danger">nesumoketa</span>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col >
                                Treneris Jonas - <span className="text-success">aktyvus</span>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col >
                                Nemuno salos kortai - <span className="text-danger">nesumoketa</span>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col >
                                Treneris Petras - <span className="text-info">mokejimas vyksta</span>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MembershipCard;