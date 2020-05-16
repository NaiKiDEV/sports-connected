import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class FeatureCard extends Component {
    state = {}
    render() {
        return (
            <Container fluid className="text-center my-3">
                <Row className="feature-card">
                    <Col md={{ span: 10, offset: 1 }}>
                        <h3 className="text-uppercase py-3 text-darkblue">{this.props.title}</h3>
                        <div className="text-center">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FeatureCard;