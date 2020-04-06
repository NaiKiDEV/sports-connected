import React, { Component } from 'react';
import NavBar from './navbar';
import Carousel from './carousel';
import Category from './category';
import Features from './features';
import CallToAction from './callToAction';

class LandingPage extends Component {

    render() {
        return (<div>
            <NavBar />
            <Carousel />
            <Category />
            <Features />
            {/* <CallToAction /> */}
        </div>
        );
    }
}

export default LandingPage;