import React, { Component } from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../slider-animation.css";

const content = [
    {

        image: "https://i.imgur.com/ZXBtVw7.jpg",

    },
    {

        image: "https://i.imgur.com/ZXBtVw7.jpg",

    }, {

        image: "https://i.imgur.com/ZXBtVw7.jpg",

    }
]
class AnimatedCarousel extends Component {

    render() {
        return (
            <div>
                <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default AnimatedCarousel
