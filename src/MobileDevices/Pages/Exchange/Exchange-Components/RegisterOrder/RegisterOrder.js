import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import OrderForms from './OrderForms/OrderForms';
import OrdersBook from './OrderBook/OrderBook';
import CurrencyTitle from '../CurrencyTitle/CurrencyTitle';

// import SellOrderForm from './SellOrderFrom/SellOrderForm';

const LastAsk = styled(Row)`
  flex: 100%;
  color: white;
`;

const OrderFormsWrapper = styled.div``;

export default class RegisterOrder extends Component {
  callback (key) {
    console.log(key);
  }

  render () {
    return (
      <Row className='register-order'>
        <Row>
          <CurrencyTitle showToggle={this.props.showToggle} />
        </Row>
        <Row
          type='flex'
          justify='space-between'
          gutter={15}
          className='register-order-content'
        >
          <Col xs={14}>
            <OrderFormsWrapper>
              <OrderForms />
            </OrderFormsWrapper>
          </Col>
          <Col xs={10}>
            <LastAsk>0.0018409</LastAsk>
            <OrdersBook />
          </Col>
        </Row>
      </Row>
    );
  }
}
