import React, { Component } from 'react';
import MembershipCard from '../components/membershipCard'
import { Container, Row, Col } from 'react-bootstrap';


function Dashboard() {
    return (
        <div>
            <Container fluid className="mt-5">
                <Row>
                    <Col md={{ span: 4 }}>
                        <MembershipCard />
                    </Col>
                    <Col md={{ span: 4 }}>
                        <MembershipCard />
                    </Col>
                    <Col md={{ span: 4 }}>
                        <MembershipCard />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Dashboard;