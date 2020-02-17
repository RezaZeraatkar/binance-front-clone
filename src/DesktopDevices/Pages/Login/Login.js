import React from 'react';
import styled from 'styled-components';
import { IoIosLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const Login = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  min-width: 420px;
  margin: 40px auto;
  background-color: #fafafa;
  padding: 40px 24px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08);

  & .ant-form-item {
    margin-bottom: 26px;
    &.ant-form-item-with-help {
      margin-bottom: 0px;
    }
    & .ant-form-explain {
      margin: 2px 0px;
    }
    & input {
      :focus {
        border: none;
        outline: none;
      }
    }
  }
`;

const FormTitle = styled.div`
  margin: 100px 0 40px 0px;
  text-align: center;
  font-size: 24px;
  color: #212833;
`;

const LoginFormWarn = styled.div`
  color: #848e9c;
  text-align: center;
`;

const BinanceAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid #f5f5f5;
  padding: 6px 24px;
  border-radius: 23px;
  text-align: center;
  margin: 16px auto 8px;
  width: 250px;
  background-color: #fafafa;
  color: #212833;
`;

const LoginButton = styled.div`
  width: 100%;
  & button {
    width: 100%;
    border-radius: 4px;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #212833;
  & a {
    color: #d8a000;
  }
`;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Login>
        <FormTitle>Log in</FormTitle>
        <LoginFormWarn>
          Please check that you are visiting the correct URL:
        </LoginFormWarn>
        <BinanceAddress>
          <IoIosLock
            style={{
              color: '#00C087',
              fontSize: 15,
              position: 'relative',
              bottom: 1,
            }}
          />
          <span style={{ marginLeft: 8 }}>https://www.binance.com</span>
        </BinanceAddress>
        <FormWrapper>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input size="large" />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password size="large" />)}
            </Form.Item>
            <Form.Item>
              <LoginButton>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  Log in
                </Button>
              </LoginButton>
            </Form.Item>
            <Form.Item>
              <FormFooter>
                <Link to="/forgot/password/page">Forgot Password?</Link>
                <div>
                  <span style={{ marginRight: 5 }}>Not on Binance yet?</span>
                  <Link to="/register">Register</Link>
                </div>
              </FormFooter>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Login>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;
