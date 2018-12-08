import React, { Component } from 'react';
import { Layout, Card, Row, Col } from 'antd';
import Lightbox from 'react-image-lightbox';
import './about.css'

const { Content } = Layout
const { Meta } = Card;

const images = [
    'https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/pic1.jpg',
    'https://raw.githubusercontent.com/Dheeraj-v/Hall/master/src/images/p2.jpg'
];

class AboutusContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <Layout className="content-style">
                <Content className="mar-l-8 mar-t-10">
                    <h3 className="mar-r-10 custom-para">

                        "love for you is a journey, starting at forever and ending at never."
                </h3>
                    <Row>
                        {images.map((item, index) => {

                            return (

                                <Col lg={8} md={8} key={index}>
                                    <Card
                                        hoverable
                                        style={{ width: 300 }}
                                        cover={<img alt="example" src={item} onClick={() => this.setState({ isOpen: true, photoIndex: index })} />}
                                    >
                                        <Meta
                                            title="Europe Street beat"
                                            description="www.instagram.com"
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </Content >
            </Layout >
        )
    }
}

export default AboutusContent
