import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function GymUserStats() {

    return (
        <Card className="text-light modal-header ml-3">
            <Card.Body className="w-100">
            <Card.Title className="login-header">
                    <h2>VARTOTOJŲ STATISTIKA</h2>
                </Card.Title>
                <Container fluid className="pt-2">
                    <Row className="mb-2">
                        <Col sm={10} className="offset-1">
                            <h5><span className="text-success text-uppercase">• aktyvūs</span> 20%</h5>
                            <h5><span className="text-danger text-uppercase">• nesumokėje</span> 30%</h5>
                            <h5><span className="text-disabled text-uppercase">• neaktyvūs</span> 50%</h5>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default GymUserStats;