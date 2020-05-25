import React, { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function GymOffers() {
    return (
        <div>
            <Card className="text-light modal-header ml-3 px-0 pb-0">
                <Card.Body className="px-0 w-100 pb-0">
                    <Card.Title className="pl-4">
                        <h2>PASIULYMAI</h2>
                    </Card.Title>
                    <Container fluid className="px-0">
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                GYM+ - <span className="text-success">aktyvus</span>
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                VSFITNESS - <span className="text-danger">nesumoketa</span>
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                Treneris Jonas - <span className="text-success">aktyvus</span>
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                Nemuno salos kortai - <span className="text-danger">nesumoketa</span>
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                Treneris Petras - <span className="text-info">mokejimas vyksta</span>
                                
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                        <Row className="pl-4 mb-0 w-100 offers mx-0 py-2">
                            <Col >
                                Sport Club - <span className="text-info">mokejimas vyksta</span>
                                <div className="float-right pr-2">
                                    <i class="fas fa-edit mr-3 offer-edit"></i>
                                    <i className="fa fa-close offer-delete"> </i>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="float-right">
                        <Button variant="link" className="btn-add px-3">
                            Pridėti
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GymOffers;