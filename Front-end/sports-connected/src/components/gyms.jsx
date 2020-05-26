import React, { Component } from 'react';
import Carousel from './gymcarousel';
import Category from './gymcategories';
import AllGyms from './allGyms';
//import Features from './features';

class Gyms extends Component {

    render() {
        return (<div>
            <Carousel />
            <Category/>
            <AllGyms/>
            {/* <CallToAction /> */}
        </div>
        );
    }
}

export default Gyms;