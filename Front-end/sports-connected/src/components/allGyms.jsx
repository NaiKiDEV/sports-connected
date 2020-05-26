import React, { Component } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

function AllGyms() {
    function showMore()
    {
        if(document.getElementById('moreSection').classList.contains('d-block'))
        {
            document.getElementById('moreSection').classList.remove('d-block');
            document.getElementById('moreButton').classList.remove('d-none');
            document.getElementById('lessButton').classList.add('d-none');
        }    
        else
        {
            document.getElementById('moreSection').classList.add('d-block');
            document.getElementById('moreButton').classList.add('d-none');
            document.getElementById('lessButton').classList.remove('d-none');
        }
    }
    return (
        <Container fluid className="px-0 pt-4">
            <div className="text-center">
            <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order" onClick={()=>showMore()} id="moreButton">DAUGIAU</Button>
            </div>
             <div className="d-none allgyms_height" id="moreSection">
                <Row className="pl-4 mb-0 w-100 mx-0 py-2 ">
                    <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=1' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Fitclub - Sporto klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Kaunas -  S. Raštikio g. 67
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        8:00 - 22:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 9,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                        <Col className="text-right" sm="1">
                            <img src='https://picsum.photos/200/300?random=2' alt="logo" className="gym-logo" />                
                        </Col>
                        <Col className="d-flex align-items-center text-bold" sm="3">            
                            Sporto klubas "Sveikieji Baltai"
                        </Col>
                        <Col className="d-flex align-items-center text-bold" sm="2">            
                            Kaunas - Butrimonių g. 9
                        </Col>
                        <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        6:00 - 20:00
                        </Col>
                        <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 14,99 €
                        </Col>
                        <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                    </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                    <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=3' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Sporto klubas "ATLANTAI"
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Kaunas - Kalniečių g. 233
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        00:00 - 24:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 19,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=4' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Sportgates - Sporto Klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Kaunas - Raudondvario pl. 127
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        6:30 - 21:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 13,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=5' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Geležiniai žmonės - sporto klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Kaunas - Baltų pr. 55
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        10:00 - 23:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 25,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=6' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        DiamondGym – sporto klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Kaunas – S. Raštikio g. 67
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        6:00 - 22:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 16,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=7' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Viva Gym – sporto klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Vilnius – K. Kalinausko g. 2B
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        8:00 - 21:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 20,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=8' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Vilniaus Sigmos sporto centras
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Vilnius – P. Lukšio g. 2
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        8:00 - 20:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 17,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
                <div className="gym-border mx-auto"></div>
                <Row className="pl-4 mb-0 w-100 mx-0 py-2">
                <Col className="text-right" sm="1">
                        <img src='https://picsum.photos/200/300?random=9' alt="logo" className="gym-logo" />                
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="3">            
                        Viva Gym – sporto klubas
                    </Col>
                    <Col className="d-flex align-items-center text-bold" sm="2">            
                        Vilnius – K. Kalinausko g. 2b
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="1">            
                        9:00 - 22:00
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="2">            
                        Nuo 24,99 €
                    </Col>
                    <Col className="d-flex align-items-center text-bold justify-content-center" sm="3">            
                        <Button href="#" variant="link" className="mx-1 btn-more">DAUGIAU</Button>
                        <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order">UŽSISAKYTI</Button>
                    </Col>
                </Row>
            </div>
            <div className="text-center">
                <Button href="#" variant="link" className="mx-1 btn-orderdesign btn-order d-none" onClick={()=>showMore()} id="lessButton">MAŽIAU</Button>
            </div>
        </Container>
    )
}

export default AllGyms;