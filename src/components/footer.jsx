import React, { Component } from 'react';
import { Row, Col, Layout, Divider, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Footer } = Layout
class FooterComponent extends Component {

    render() {
        return (
            <Footer>
                <Row type="flex" justify="center" className='mar-b-10'>
                    <Col lg={3} md={3} sm={6} xs={6}><Link to={'/home'} className="nav-link"> Home</Link></Col>
                    <Col lg={3} md={3} sm={9} xs={9}><Link to={'/Gallery'} className="nav-link">Gallery</Link> </Col>
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
                        <p className="mar-b-10 heading"> Follow Us </p>
                        <p><Icon type="facebook" theme="filled" className="mar-r-10" style={{ fontSize: '18px', color: '#08c' }} /><Icon type="twitter" className="mar-r-10" style={{ fontSize: '18px', color: '#08c' }} /></p>


                    </Col>
                </Row>
                <Divider />
                <Row type="flex" justify="center">
                    <Col lg={2} md={2} sm={24} xs={24}><a href='/'> Designed By</a></Col>
                </Row>

            </Footer >
        )
    }
}

export default FooterComponent
