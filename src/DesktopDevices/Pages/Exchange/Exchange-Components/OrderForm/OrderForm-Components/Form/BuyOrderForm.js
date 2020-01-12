import React from 'react';
import { Form, Row } from 'antd';
import { Link } from 'react-router-dom';

// Components
import RatioButtons from './RatioButtons';
import Wallet from '../../Wallet';
import OCOLimitCaption from './OCOLimitCaption';

// Styled Compoents
import InputNumber from '../../../../../../UI/Inputs/InputNumber';
import LinkConatiner from '../../../../../../UI/Links/LinkContainer';

// Form Types
import FormTypes from '../../FormTypes';

class BuyOrderForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  onChange = value => {
    console.log('changed', value);
  };

  render () {
    const { whichForm } = this.props;
    console.log(whichForm);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          <Wallet type='Buy' what='BTC' wallet='USDT' />
        </Form.Item>
        {whichForm === FormTypes.OCO ? (
          <Form.Item>
            <OCOLimitCaption cap='Limit' />
          </Form.Item>
        ) : null}
        {whichForm === FormTypes.STOP_LIMIT ? null : (
          <Form.Item label='Price'>
            <InputNumber
              defaultValue={whichForm === FormTypes.MARKET ? 'Market' : 7965.18}
              min={0.01}
              step={0.01}
              formatter={value => `${value}`}
              onChange={this.onChange}
              suffix='USDT'
              size='small'
              disabled={whichForm === FormTypes.MARKET ? true : false}
            />
          </Form.Item>
        )}
        {whichForm === FormTypes.OCO ? (
          <Form.Item>
            <OCOLimitCaption cap='Stop-Limit' />
          </Form.Item>
        ) : null}
        {whichForm === FormTypes.OCO || whichForm === FormTypes.STOP_LIMIT ? (
          <Form.Item label='Stop'>
            <InputNumber
              defaultValue={7965.18}
              min={0.01}
              step={0.01}
              formatter={value => `${value}`}
              onChange={this.onChange}
              suffix='USDT'
              size='small'
            />
          </Form.Item>
        ) : null}
        {whichForm === FormTypes.OCO || whichForm === FormTypes.STOP_LIMIT ? (
          <Form.Item label='Limit'>
            <InputNumber
              defaultValue={7965.18}
              min={0.01}
              step={0.01}
              formatter={value => `${value}`}
              onChange={this.onChange}
              suffix='USDT'
              size='small'
            />
          </Form.Item>
        ) : null}
        <Form.Item label='Amount'>
          <InputNumber
            defaultValue={7965.18}
            min={0.01}
            step={0.01}
            formatter={value => `${value}`}
            onChange={this.onChange}
            suffix='BTC'
            size='small'
          />
        </Form.Item>
        <Form.Item label='ratios' className='hiddenLabel'>
          <RatioButtons />
        </Form.Item>
        {whichForm === FormTypes.MARKET ? null : (
          <Form.Item label='Total'>
            <InputNumber
              defaultValue={7965.18}
              min={0.01}
              step={0.01}
              formatter={value => `${value}`}
              onChange={this.onChange}
              size='small'
              suffix='USDT'
            />
          </Form.Item>
        )}
        <Form.Item></Form.Item>
        <Form.Item>
          <Row type='flex' justify='center'>
            <LinkConatiner>
              <Link to='/login'>Log in</Link> Or{' '}
              <Link to='/register'>Register now </Link>to trade
            </LinkConatiner>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedBuyOrderForm = Form.create({ name: 'BuyOrderForm' })(BuyOrderForm);

export default WrappedBuyOrderForm;
