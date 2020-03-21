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
                    <Col sm="4">
                        <CategoryCard logoUrl="https://picsum.photos/100/100" title="Sporto Sales" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                    <Col sm="4">
                        <CategoryCard logoUrl="https://picsum.photos/100/100" title="Asmeniniai Treneriai" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                    <Col sm="4">
                        <CategoryCard logoUrl="https://picsum.photos/100/100" title="Sporto Aiksteles" learnMoreUrl="#">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt tempora perferendis suscipit voluptates.
                        </CategoryCard>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Category;