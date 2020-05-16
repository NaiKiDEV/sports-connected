import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProfilePage() {
    const { userData } = useSelector(state => state.user);
    return <div>
        <Container fluid className="mt-5">
            <Row >
                <Col className="text-center">
                    <h1 >Profilis</h1>
                </Col>
            </Row>
            <Form className="pt-5">
                <Form.Group as={Row} controlId="formEmail" className="text-xs-center">
                    <Col sm={4} md={4} xl={3} className="offset-xl-2">
                        <h3 className="mb-2 pb-0 mt-2 pl-sm-3">Vardas</h3>
                    </Col>
                    <Col sm={6} md={5} xl={4}>
                        <Form.Control className="border-zero submit-text mb-2" style={{ pointerEvents: 'none' }} defaultValue={userData.name} />
                        <Form.Control className="border-zero submit-text mb-2" placeholder="Naujas vardas" />
                    </Col>
                    <Col sm="1">
                        <Button variant="primary" className="mt-1" type="submit">
                            Keisti
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <Form className="pt-5">
                <Form.Group as={Row} controlId="formEmail" className="text-xs-center">
                    <Col sm={4} md={4} xl={3} className="offset-xl-2">
                        <h3 className="mb-2 pb-0 mt-2 pl-sm-3">Pavarde</h3>
                    </Col>
                    <Col sm={6} md={5} xl={4}>
                        <Form.Control className="border-zero submit-text mb-2" style={{ pointerEvents: 'none' }} defaultValue={userData.surname} />
                        <Form.Control className="border-zero submit-text mb-2" placeholder="Nauja pavarde" />
                    </Col>
                    <Col sm="1">
                        <Button variant="primary" className="mt-1" type="submit">
                            Keisti
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <Form className="pt-5">
                <Form.Group as={Row} controlId="formEmail" className="text-xs-center">
                    <Col sm={4} md={4} xl={3} className="offset-xl-2">
                        <h3 className="mb-2 pb-0 mt-2 pl-sm-3">Elektroninis pastas</h3>
                    </Col>
                    <Col sm={6} md={5} xl={4}>
                        <Form.Control className="border-zero submit-text mb-2" style={{ pointerEvents: 'none' }} defaultValue={userData.email} />
                        <Form.Control className="border-zero submit-text mb-2" placeholder="Naujas pastas" />
                    </Col>
                    <Col sm="1">
                        <Button variant="primary" className="mt-1" type="submit">
                            Keisti
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
            <Form className="mt-5 pt-3">
                <Form.Group as={Row} controlId="formEmail" className="mt-5">
                    <Col sm={4} md={4} xl={3} className="offset-xl-2">
                        <h3 className="mb-2 pb-0 mt-2 pl-sm-3">Slaptazodis</h3>
                    </Col>
                    <Col sm={6} md={5} xl={4}>
                        <Form.Control className="border-zero submit-text mb-2" type="password" placeholder="Naujas slaptazodis" />
                        <Form.Control className="border-zero submit-text mb-2" type="password" placeholder="Pakartokite slaptazodi" />
                    </Col>
                    <Col sm="1">
                        <Button variant="primary" className="mt-1" type="submit">
                            Keisti
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </div>
}

export default ProfilePage;