import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

const FormItem = Form.Item;
const { TextArea } = Input;

class ContactusForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('https://script.google.com/macros/s/AKfycbxqZLbWJxi-7G3Rh0BsKkInSDSXonqPCIFFDGd-SX_S_gLmaxlG/exec',

                    values)
                    .then(res => console.log(res.data));

            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <Form onSubmit={this.handleSubmit} className="contact-form">
                <FormItem label="Name">
                    {getFieldDecorator('name', {
                        initialValue: '',
                        validateTrigger: 'onBlur',
                        rules: [{
                            required: true,
                            message: 'Please enter Name'
                        }]
                    })(<Input maxLength="30" type='text' placeholder='Name' name="name" autoComplete='off' />)}
                </FormItem>
                <FormItem label="Mobile Number">
                    {getFieldDecorator('phonenumber', {
                        initialValue: '',
                        validateTrigger: 'onBlur',
                        rules: [{
                            required: true,
                            message: 'Please enter Mobile Number'
                        }]
                    })(<Input maxLength="15" type='tel' name="phonenumber" placeholder='Mobile Number' autoComplete='off' />)}
                </FormItem>
                <FormItem label="Description">
                    {getFieldDecorator('description', {
                        initialValue: '',
                        validateTrigger: 'onBlur',
                        rules: [{
                            required: true,
                            message: 'Please enter Queries'
                        }]
                    })(<TextArea rows="6" cols="50" name="description">
                    </TextArea>)}
                </FormItem>
                <Button type="primary" htmlType="submit" className="contact-form-button">
                    Submit
          </Button>
            </Form>

        )
    }
}
ContactusForm.propTypes = {
    form: PropTypes.object
}
const WrappedContactusForm = Form.create()(ContactusForm);
export default WrappedContactusForm
