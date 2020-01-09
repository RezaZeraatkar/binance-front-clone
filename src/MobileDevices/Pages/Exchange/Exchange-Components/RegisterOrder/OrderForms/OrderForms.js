import React, { Component } from 'react';
import { Row, Form, Tabs } from 'antd';

// Components
import BuyOrderForm from './BuyOrderForm/BuyOrderForm';
import SellOrderForm from './SellOrderFrom/SellOrderForm';

// UI Components
import TabsGroupWrapper from '../../../../../UI/Tabs/TabsGroupWrapper/TabsGroupWrapper';

const { TabPane } = Tabs;

class OrderForm extends Component {
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
  callback (key) {
    console.log(key);
  }
  render () {
    return (
      <>
        {/* For Mobile Devices */}
        <Row>
          <TabsGroupWrapper className='order-forms-buttons-group'>
            <Tabs onChange={this.callback} type='card'>
              <TabPane tab='Buy' key='1'>
                <BuyOrderForm />
              </TabPane>
              <TabPane tab='Sell' key='2'>
                <SellOrderForm />
              </TabPane>
            </Tabs>
          </TabsGroupWrapper>
        </Row>
      </>
    );
  }
}

const WrappedOrderForm = Form.create({ name: 'Order_form' })(OrderForm);

export default WrappedOrderForm;
