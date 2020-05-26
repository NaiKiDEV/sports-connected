import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GymCategoryCard from './gymCategoryCard';

class GymCategories extends Component {
    state = {}
    render() {
        return (
            <Container fluid className="bg-category">

                <h1 className="pt-5 text-center text-uppercase text-bold">populiariausios sporto salės</h1>
                <Row className="py-5">
                    <Col md="4">
                        <GymCategoryCard logoUrl="https://picsum.photos/400/400?random=1" title="Gymplius" learnMoreUrl="#" buttontext="UŽSISAKYTI !">
                            <p>
                            DARBO LAIKAS 24/7
                            </p>
                            <p>
                            NERIBOTAS APSILANKYMAS
                            </p>
                            <p>
                            SALĖS PLOTAS NUO 1200 iki 1800 KVM
                            </p>
                            <p>
                            DAUGIAU NEI 100 SKIRTINGŲ TRENIRUOKLIŲ
                            </p>
                            <p>
                            SOLIRIUMAI
                            </p>
                            <p className="text-bold">
                            KAINA NUO 19,90€ 
                            </p>
                        </GymCategoryCard>
                    </Col>
                    <Col md="4">
                        <GymCategoryCard logoUrl="https://picsum.photos/400/400?random=2" title="VS Fitness" learnMoreUrl="#" buttontext="UŽSISAKYTI">
                            <p>
                            DARBO LAIKAS 6:30-22:00
                            </p>
                            <p>
                            DIDŽIAUSIA BALTIJOS ŠALYSE ERDVĖ SPORTUI
                            </p>
                            <p>
                            NERIBOTAS APSILANKYMŲ KIEKIS
                            </p>
                            <p>
                            NEMOKAMA KOPIMOS SIENA
                            </p>
                            <p>
                            PIRTYS
                            </p>
                            <p className="text-bold">
                            KAINA NUO 25,95€ 
                            </p>
                        </GymCategoryCard>
                    </Col>
                    <Col md="4">
                        <GymCategoryCard logoUrl="https://picsum.photos/400/400?random=3" title="Lemon Gym" learnMoreUrl="#" buttontext="UŽSISAKYTI !">
                        <p>
                            DARBO LAIKAS 6:00-21:00
                            </p>
                            <p>
                            VISŲ KLUBŲ BALTIJOS ŠALYSE LANKYMAS
                            </p>
                            <p>
                            NERIBOTAS APSILANKYMŲ KIEKIS
                            </p>
                            <p>
                            GRUPINĖS TRENIRUOTĖS
                            </p>
                            <p>
                            LEMON GYM E-TRAINER PROGRAMĖLĖ
                            </p>
                            <p className="text-bold">
                            KAINA NUO 9,99€
                            </p>
                        </GymCategoryCard>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default GymCategories;