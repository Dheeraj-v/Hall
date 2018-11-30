import React, { Component } from 'react';
import { Layout, Carousel } from 'antd';

const { Content } = Layout

class AboutusContent extends Component {

    render() {
        return (
            <Layout className="content-style">
                <Content className="mar-l-8 mar-t-10">
                    <h3 className="mar-r-10 custom-para">

                        "love for you is a journey, starting at forever and ending at never."
                </h3>
                    <h4 className=" mar-t-10"> Following are the Amenities: </h4>
                    <ul>
                        <li>Hall seating capacity- 600</li>
                        <li>Dining hall capacity- 180</li>
                        <li>Centralized AC</li>
                        <li>24hrs Power backup</li>
                        <li>Rooms- 6 (AC)</li>
                    </ul>
                    <ul>
                        <li>Hall Decoration</li>
                        <li>Ring Ceremony</li>
                        <li>Wedding Receptions</li>
                        <li>Weddings</li>
                        <li>Floral Arrangement</li>
                    </ul>
                    <ul>
                        <li>Welcoming The New Borns</li>
                        <li>A Family Reunion</li>
                        <li>Birthday Decoration and gettogether</li>
                        <li>Musical Parties</li>
                        <li>Breakfast / Lunch / hi-Tea / Dinner</li>
                    </ul>


                </Content >
            </Layout >
        )
    }
}

export default AboutusContent
