import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';

const FormItem = Form.Item;
const { TextArea } = Input;

class ContactusForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)
                let value = Object.keys(values).map(key => {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(values[key])

                }).join('&')
                console.log('Received values of form: ', values);
                // axios.post('https://script.google.com/macros/s/AKfycbwmivja7ooh_Y7jmMS017o6lZooQXqnCexnELsCcRrZKC3sekg/exec',
                //     // axios.post('http://localhost:4000/contactUs/add',

                //     {
                //         headers: {

                //             'Content-Type': 'application/x-www-form-urlencoded',
                //             'crossdomain': true
                //         }
                //     },
                //     value)

                //     .then(res => console.log(res.data))
                //     .catch(function (error) {
                //         console.log("Post Error : " + error);
                //     });

                var url = "https://script.google.com/macros/s/AKfycbwmivja7ooh_Y7jmMS017o6lZooQXqnCexnELsCcRrZKC3sekg/exec"; // prod
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // console.log(xhr.responseText);
                        // document.getElementById('gform').style.display = 'none'; // hide form
                        // document.getElementById('thankyou').style.display = 'block';
                        // document.getElementById('browse_all').style.display = 'block';
                        return;
                    }
                    else {
                        console.log('Request failed. Returned status: ' + xhr.status);
                        return;
                    }
                };
                // url encode form data for sending as post data
                var encoded = Object.keys(values).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(values[k])
                }).join('&')
                xhr.send(encoded);

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
