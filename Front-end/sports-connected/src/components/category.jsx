import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from './categoryCard';

class Category extends Component {
    state = {}
    render() {
        return (
            <Container fluid className="bg-category">

                <h1 className="pt-5 text-center text-uppercase text-bold">Siulomos paslaugos</h1>
                <Row className="py-5">
                    <Col md="4">
                        <CategoryCard logoUrl="https://picsum.photos/400/400?random=1" title="Sporto Salės" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                    <Col md="4">
                        <CategoryCard logoUrl="https://picsum.photos/400/400?random=2" title="Treneriai" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                    <Col md="4">
                        <CategoryCard logoUrl="https://picsum.photos/400/400?random=3" title="Sporto Aikštelės" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Category;