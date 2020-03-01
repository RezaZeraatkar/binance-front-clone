import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { GlobalStyles } from '../../GlobalStyles/GlobalStyles';

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

const FormButton = styled.div`
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding: 0;
`;

const CheckboxWrapper = styled.div``;

const StyledLink = styled(Link)`
  color: #d8a000;
`;

const content = (
  <Content>
    <span>* Minimum 8 characters</span>
    <span>* At least 1 UPPER CASE</span>
    <span>* Minimum 1 number</span>
  </Content>
);

class RegisterForm extends React.Component {
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
        <GlobalStyles />
        <FormTitle>Create a free account</FormTitle>
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
            <Form.Item label="Password" hasFeedback extra={content}>
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
            <Form.Item
              label="Referral ID (Optional)"
              hasFeedback
              extra="Your commission kickback rate: 0%"
            >
              {getFieldDecorator('referallID', {
                rules: [
                  {
                    message: 'Please input correct referral id!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input size="large" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <CheckboxWrapper>
                  <Checkbox>
                    I am over age 18 , and I agree to{' '}
                    <StyledLink to="/binance/terms">Binance's Terms</StyledLink>
                  </Checkbox>
                </CheckboxWrapper>,
              )}
            </Form.Item>
            <Form.Item>
              <FormButton>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  Create account
                </Button>
              </FormButton>
            </Form.Item>
            <Form.Item>
              <FormFooter>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flex: '100%',
                  }}
                >
                  <span style={{ marginRight: 5 }}>Already registered?</span>
                  <StyledLink to="/login">Log in</StyledLink>
                </div>
              </FormFooter>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Login>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default WrappedRegisterForm;
