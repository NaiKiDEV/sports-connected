import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from './featureCard';

class Features extends Component {
    state = {}
    render() {
        return (
            <Container fluid>
                <h1 className="pt-5 text-center text-uppercase text-bold text-darkblue">Svetainės privalumai</h1>
                <Row className="py-5">
                    <Col sm="4">
                        <FeatureCard title="Mokėjimai/Užsakymai">
                            <ul className="ml-0 pl-0 text-uppercase">
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                            </ul>
                        </FeatureCard>
                    </Col>
                    <Col sm="4">
                        <FeatureCard title="Viskas vienoje vietoje">
                            <ul className="ml-0 pl-0 text-uppercase">
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                            </ul>
                        </FeatureCard>
                    </Col>
                    <Col sm="4">
                        <FeatureCard title="Patogus Dizainas">
                            <ul className="ml-0 pl-0 text-uppercase">
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                                <li>lorem impsum</li>
                            </ul>
                        </FeatureCard>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Features;