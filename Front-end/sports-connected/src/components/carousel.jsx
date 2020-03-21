import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../img/gym1.jpg';
import image2 from '../img/gym2.png';
import image3 from '../img/gym3.jpg';

class CarouselScreen extends Component {
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
                        <image1 />
                        <Carousel.Caption>
                            <h2 className="text-bold">SPORTSCONNECTED FOR EVERYONE</h2>
                            <p>Go ahead and create your account now to see all the new hot offers ranging from gym's to personal trainers. Upgrade your game right NOW!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image background-tint"
                            src={image3}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-bold">NEW GYM HAS LAUNCHED - VSFITNESS</h2>
                            <p>Login using Sports Connected account to see new VSFITNESS offers.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image background-tint"
                            src={image2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-bold">HOT OFFERS AT GYM+</h2>
                            <p>There is a huge discount currently at Gym+ offering up to 40% off for your first membership!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselScreen;