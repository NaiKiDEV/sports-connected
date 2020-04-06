import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class CategoryCard extends Component {
    state = {}
    render() {
        return (
            <Container fluid className="text-center my-3">
                <Row>
                    <Col md={{ span: 8, offset: 2 }} >
                        <img src={this.props.logoUrl} alt="logo" className="category-logo mb-4" />
                        <h3 className="text-uppercase py-2">{this.props.title}</h3>
                        <p>{this.props.children}</p>
                        <Button href={this.props.learnMoreUrl} variant="link" className="mx-1 btn-navbar btn-register text-dark">Daugiau!</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CategoryCard;