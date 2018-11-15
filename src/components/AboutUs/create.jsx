import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


const FormItem = Form.Item;

class Create extends Component {
    componentDidMount() {
        axios.get('http://localhost:4000/contactUs')
            .then(response => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:4000/contactUs/add', values)
                    .then(res => console.log(res.data));

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <div className='modal-body-adjustHeight'>
                    <Form layout='vertical' onSubmit={this.handleSubmit}>
                        <FormItem label='Network'>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true,
                                    message: 'Please select Floating IP pool name'
                                }]
                            })(<Input placeholder="IP Address" autoComplete="off" />)}
                        </FormItem>
                        <FormItem
                            wrapperCol={{ span: 12, offset: 5 }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
          </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

Create.propTypes = {
    form: PropTypes.object
}
const WrappedCreate = Form.create()(Create)
export default WrappedCreate