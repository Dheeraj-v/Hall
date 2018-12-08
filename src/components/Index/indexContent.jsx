import React, { Component } from 'react';
import { Layout,Row, Col } from 'antd';

const { Content } = Layout
class IndexContent extends Component {

    render() {
        return (
            <Layout className = "content-style">
                <Content className="mar-l-8 ">
                    <h5 className='font'>Greetings!</h5>
                    <p className ="mar-r-10 custom-para">
                    Weddings are ‘once in a lifetime’ affair and we know very well how important even the minutest things are. Therefore, we leave no stone upturned when you come to celebrate familial ceremonies at our property.
                    If you are in Chennai near saidapet and want to make your wedding or reception event special, then this is the place.
                    We welcome you warmly to our newly renovated Marriage Hall with all modern amenities.
   
</p>
                    <p className ="mar-r-10 custom-para">
                    Our Spacious and tradional marriage hall is in main area so that your friends and families can easily reach the place without any difficulties.
                    Our newly modified Hall is equiped with Centralized AC which extends to the Dining Hall too. Also we have 6 individual rooms equipped with Air Conditioners.
                    
</p>
                    <p className ="mar-r-10 custom-para">
                        </p>
                        <h4 className=" mar-t-10">  Amenities </h4>
                    <Row>
                        <Col lg={12} md={12}>
                    <ul >
                        <li>Hall seating capacity- 600</li>
                        <li>Dining hall capacity- 180</li>
                        <li>Centralized AC</li>
                        <li>24hrs Power backup</li>
                        <li>Rooms- 6 (AC)</li>
                        <li>Hall Decoration</li>
                        <li>Ring Ceremony</li>
                    </ul>
                    </Col>
                    <Col lg={12} md={12}>
                    <ul>
                        <li>Wedding Receptions</li>
                        <li>Weddings</li>
                        <li>Floral Arrangement</li>
                        <li>Welcoming The New Borns</li>
                        <li>A Family Reunion</li>
                        <li>Birthday Decoration and gettogether</li>
                        <li>Musical Parties</li>
                        <li>Breakfast / Lunch / hi-Tea / Dinner</li>
                    </ul>
                    </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default IndexContent
