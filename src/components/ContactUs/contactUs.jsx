import React, { Component } from 'react';
import { Form, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import ContactusForm from './ContactusForm'

class ContactUs extends Component {

    render() {
        return (
            <div className='custom-font'>
                <Row>
                    <Col>
                        <h3>Contact us for any queries</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12} md={12} sm={24} xs={24} className='size'>
                        <p className="mar-b-0 heading mar-t-100"> Address </p>
                        <p className="mar-b-0">No.46, Bazzar Road</p>
                        <p className="mar-b-0">Saidapet</p>
                        <p className="mar-b-0">Chennai - 600015</p>
                        <p className="mar-b-0">Ph : 044-24359999</p>

                    </Col>
                    <Col lg={10} md={12} sm={24} xs={24}>
                        <ContactusForm />
                    </Col>
                </Row>

            </div >
        )
    }
}
ContactUs.propTypes = {
    form: PropTypes.object
}
const wrappedContactUs = Form.create()(ContactUs);

export default wrappedContactUs
