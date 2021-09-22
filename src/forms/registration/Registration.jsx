import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { RightCircleFilled, DeleteFilled } from '@ant-design/icons';
import { connect } from 'react-redux';

import { addUserDetails } from '../../actions/userResponseAction';

import { addQuestionNumber } from '../../actions/questionAction';

import { withRouter } from 'react-router-dom';

class RegistrationForm extends Component {
  state = {
    userFirstName: null,
    userLastName: null,
    userPhoneNumber: null,
    userEmailId: null,
    validStatusType: null
  };

  componentDidMount() {}

  _onRegister = (values) => {
    console.log(values);
    this.props.addUserDetails(values);
    this.props.history.push('/find-your-swim-level');
  };

  _onReset = () => {
    this.setState({ userFirstName: '', userLastName: '', userPhoneNumber: '', userEmailId: '' });
  };

  _checkFieldValid = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { Option } = Select;
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="61">+61</Option>
        </Select>
      </Form.Item>
    );
    return (
      <Form
        name="registration"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        onFinish={this._onRegister}
        onFinishFailed={this._onReset}
        initialValues={{
          prefix: '61'
        }}
        scrollToFirstError
      >
        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please enter your Firstname'
            }
          ]}
        >
          <Input placeholder="" size="large" name="userFirstName" />
        </Form.Item>
        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please enter your Lastname'
            }
          ]}
        >
          <Input placeholder="" size="large" name="userLastName" />
        </Form.Item>
        <Form.Item
          label="Contact"
          name="phonenumber"
          rules={[
            {
              required: true,
              message: 'Please enter your phone number'
            }
          ]}
        >
          <Input addonBefore={prefixSelector} placeholder="" size="large" name="userPhoneNumber" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: 'email' },
            {
              required: true,
              message: 'Please enter your email'
            }
          ]}
        >
          <Input placeholder="" size="large" value={this.state.userEmailId} name="userEmailId" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            icon={<RightCircleFilled />}
            size="large"
            style={{ marginLeft: '50px' }}
          >
            Start
          </Button>
          <Button
            htmlType="button"
            shape="round"
            size="large"
            icon={<DeleteFilled />}
            onClick={this._onReset}
            style={{ marginLeft: '10px' }}
          >
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserDetails: (data) => dispatch(addUserDetails(data)),
    addQuestionNumber: (data) => dispatch(addQuestionNumber(data))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(RegistrationForm));
