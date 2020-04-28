import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function MembershipCard() {
    return (
        <div>
            <Card className="text-light modal-header">
                <Card.Body>
                    <Card.Title>
                        NARYSTES
                        </Card.Title>
                    <Container>
                        <Row >
                            <Col >
                                GYM+ - <span className="text-success">aktyvus</span>
                            </Col>
                        </Row>
                        <Row >
                            <Col >
                                VSFITNESS - <span className="text-danger">nesumoketa</span>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MembershipCard;