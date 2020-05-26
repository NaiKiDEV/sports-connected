import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../img/gymplius.jpg';
import image2 from '../img/lemongym.jpg';
import image3 from '../img/vsfitness.jpg';

class GymCarouselScreen extends Component {
    state = {}
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image background-tint"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-bold">GYM+</h2>
                            <p>DARBO LAIKAS 24/7 | NERIBOTAS APSILANKYMAS | DAUGIAU NEI 100 SKIRTINGŲ TRENIRUOKLIŲ</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image background-tint"
                            src={image3}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-bold">VSFITNESS</h2>
                            <p>SVEIKATINGUMO CENTRAS | TENISO KORTAI | BADMINTONAS | KOPIMO SIENELĖ</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image background-tint"
                            src={image2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-bold">LEMON GYM</h2>
                            <p>KAINOS NUO 9.99€ PER MĖNESĮ </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default GymCarouselScreen;