import React, { Component } from 'react';
import { Row, Col, Layout, Divider, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout
class FooterComponent extends Component {

    render() {
        return (
            <Footer>
                <Row type="flex" justify="center" className='mar-b-10'>
                    <Col lg={3} md={3} sm={6} xs={6}><Link to={'/'} className="nav-link"> Home</Link></Col>
                    <Col lg={3} md={3} sm={9} xs={9}><Link to={'/AboutUs'} className="nav-link"> About us</Link> </Col>
                    <Col lg={3} md={3} sm={9} xs={9}><Link to={'/ContactUs'} className="nav-link"> Contact us</Link></Col >

                </Row >
                <Row type="flex" className='Address'>
                    <Col lg={8} md={8} className='mar-b-10'>
                        <p className="mar-b-0 heading"> Address </p>
                        <p className="mar-b-0">46 Bazzar Road, Periyapet</p>
                        <p className="mar-b-0">West Saidapet</p>
                        <p className="mar-b-0">Chennai - 600015</p>

                    </Col>
                    <Col lg={{ span: 8 }} md={8} md={{ offset: 8 }} sm={24} xs={24} className='mar-b-10'>
                        <p className="mar-b-0 heading"> Follow Us </p>
                        <p><span>FB</span><span>Twitter</span></p>


                    </Col>
                </Row>
                <Divider />
                <Row type="flex" justify="center">
                    <Col lg={2} md={2} sm={24} xs={24}><a href='javascript:void(0)'> Designed By</a></Col>
                </Row>

            </Footer >
        )
    }
}

export default FooterComponent
