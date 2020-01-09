import React, { Component } from 'react';
import { Row, Form, InputNumber, Button } from 'antd';

// Styles
import FormWrapper from '../../../../../../UI/Form/FormWrapper/FormWrapper';
import Label from '../../../../../../UI/Typography/Label/Label';
import SecondaryButton from '../../../../../../UI/Button/SecondaryButton';
import InputNumberWrapper from '../../../../../../UI/DataEntry/InputNumberWrapper/InputNumberWrapper';
import LabelWrapper from '../../../../../../UI/Typography/Label/LabelWrapper';

// Components
import OrderPercentage from '../../OrderPercentage/OrderPercentage';

class BuyOrderForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  onChange (value) {
    console.log('changed', value);
  }
  render () {
    return (
      <FormWrapper className='order-forms-wrapper'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            <Label>Available:</Label>
            <div style={{ lineHeight: '10px' }}>
              <span style={{ color: '#E9EAEC' }}>0.00000000 BNB</span>
            </div>
          </Form.Item>
          <Form.Item>
            <InputNumberWrapper>
              <InputNumber
                size='large'
                min={0.01}
                defaultValue={7316.93}
                step={0.01}
                onChange={this.onChange}
              />
              <LabelWrapper>
                <Label>BTC</Label>
              </LabelWrapper>
            </InputNumberWrapper>
          </Form.Item>
          <Form.Item>
            <InputNumberWrapper>
              <InputNumber
                size='large'
                min={0.01}
                step={0.01}
                onChange={this.onChange}
                placeholder='Amount'
              />
              <LabelWrapper>
                <Label>BNB</Label>
              </LabelWrapper>
            </InputNumberWrapper>
          </Form.Item>
          <Form.Item>
            <Row type='flex' justify='space-between'>
              <Label>Max Amount:</Label>
              <span style={{ color: '#E9EAEC' }}>0.00 BNB</span>
            </Row>
          </Form.Item>
          <Form.Item>
            <OrderPercentage />
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Label>Total:</Label>
              <span style={{ color: '#E9EAEC' }}>0.00000000 BTC</span>
            </div>
          </Form.Item>
          <Form.Item>
            <SecondaryButton role='sell'>
              <Button type='primary'>Sell</Button>
            </SecondaryButton>
          </Form.Item>
        </Form>
      </FormWrapper>
    );
  }
}
const WrappedBuyOrderForm = Form.create({ name: 'normal_login' })(BuyOrderForm);
export default WrappedBuyOrderForm;
