import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterButton from './register';

class callToAction extends Component {
    render() {
        return (
            <Container fluid className="text-center cta-window pt-5">
                <Row>
                    <Col>
                        <h2>Prisijunk!</h2>
                    </Col>

                </Row>
                <Row className="pt-3 pb-5">
                    <Col>
                        <RegisterButton />
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default callToAction;