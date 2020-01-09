import React from 'react';
import { Form, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

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
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          <InputNumber
            defaultValue={7965.18}
            min={0.01}
            step={0.01}
            formatter={value => `${value}`}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <InputNumber
            defaultValue={7965.18}
            min={0.01}
            step={0.01}
            formatter={value => `${value}`}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <InputNumber
            defaultValue={7965.18}
            min={0.01}
            step={0.01}
            formatter={value => `${value}`}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item>
          <div style={{ margin: 'auto' }}>
            <Link to='/login'>Log in</Link> Or{' '}
            <Link to='/register'>register now to trade</Link>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedBuyOrderForm = Form.create({ name: 'normal_login' })(BuyOrderForm);

export default WrappedBuyOrderForm;
