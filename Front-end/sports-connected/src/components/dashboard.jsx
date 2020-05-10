import React, { Component } from 'react';
import MembershipCard from './membershipCard'
import { Container, Row, Col } from 'react-bootstrap';
import GymCard from './gymcard';
import CourtCard from './courtcard';
import TrainerCard from './trainercard';


function Dashboard() {
    return (
        <div>
            <Container fluid className="mt-5 mb-5">
                <Row>
                    <Col md={{ span: 5 }}>
                        <MembershipCard />
                    </Col>
                    <Col md={{ span: 7 }}>
                        <TrainerCard />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{ span: 6 }}>
                        <GymCard />
                    </Col>
                    <Col md={{ span: 6 }}>
                        <CourtCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;