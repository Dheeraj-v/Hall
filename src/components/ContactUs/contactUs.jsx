import React, { Component } from 'react';
import { Form, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import ContactusForm from './ContactusForm'
const FormItem = Form.Item;

class ContactUs extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Contact us for any queries</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <p className="mar-b-0 heading"> Address </p>
                        <p className="mar-b-0">46 Bazzar Road, Periyapet</p>
                        <p className="mar-b-0">West Saidapet</p>
                        <p className="mar-b-0">Chennai - 600015</p>
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
