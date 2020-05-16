import React, { Component } from 'react';
import Carousel from './carousel';
import Category from './category';
import Features from './features';

class LandingPage extends Component {

    render() {
        return (<div>
            <Carousel />
            <Category />
            <Features />
            {/* <CallToAction /> */}
        </div>
        );
    }
}

export default LandingPage;