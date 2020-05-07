import React, { Component } from 'react';
import MembershipCard from './membershipCard'
import { Container, Row, Col } from 'react-bootstrap';
import GymCard from './gymcard';
import CourtCard from './courtcard';
import TrainerCard from './trainercard';


function Dashboard() {
    return (
        <div>
            <Container fluid className="mt-5">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <MembershipCard />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-5">
                <TrainerCard />
            </Container>
            <Container fluid className="mt-5">
                <GymCard />
            </Container>
            <Container fluid className="mt-5">
                <CourtCard />
            </Container>

        </div>
    )
}

export default Dashboard;