import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import pic1 from '../../images/pic1.jpg'

class MainCarousel extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }
    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel autoplay effect="fade" ref={node => this.carousel = node}>
                    <div><img src="https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/p2.jpg" className='carousel-image' /></div>
                    <div ><img src="https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/p4.jpg" className='carousel-image' /></div>
                    <div ><img src="https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/p2.jpg" className='carousel-image' /></div>
                    <div ><img src="https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/p7.jpg" className='carousel-image' /> </div>
                </Carousel>
                <Icon type="left" onClick={this.previous} />
                <Icon type="right" onClick={this.next} />
            </div>
        )
    }
}

export default MainCarousel
