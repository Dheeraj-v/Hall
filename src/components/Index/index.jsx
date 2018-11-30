import React, { Component } from 'react';
import MainCarousel from './mainCarousel'
import AnimatedCarousel from './AnimatedCarousel'

import IndexContent from './indexContent';

class Index extends Component {

    render() {
        return (
            <div>
                <MainCarousel />
                <IndexContent />
            </div>
        )
    }
}

export default Index
