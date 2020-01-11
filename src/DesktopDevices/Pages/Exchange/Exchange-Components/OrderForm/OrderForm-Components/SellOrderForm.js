import React from 'react';
import { Form, Row } from 'antd';
import { Link } from 'react-router-dom';

// Components
import RatioButtons from '../OrderForm-Components/RatioButtons';
import FormType from '../OrderForm-Components/FormType';

// Styled Compoents
import InputNumber from '../../../../../UI/Inputs/InputNumber';
import LinkConatiner from '../../../../../UI/Links/LinkContainer';

class SellOrderForm extends React.Component {
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          <FormType type='Sell' what='BTC' wallet='BTC' />
        </Form.Item>
        <Form.Item label='Price'>
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

const WrappedSellOrderForm = Form.create({ name: 'SellOrderForm' })(
  SellOrderForm,
);

export default WrappedSellOrderForm;
