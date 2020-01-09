import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../../../../../UI/Typography/Label/Label';

const OrderPercentageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #12161c;
  align-items: center;
  box-sizing: border-box;
  font-size: 0.1rem;
  & label {
    border: 1px solid #262d33;
    flex-basis: 24%;
    text-align: center;
    font-weight: bold;
    background-color: #1a1e22;
    font-size: 0.7rem !important;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default class OrderPercentage extends Component {
  render() {
    return (
      <OrderPercentageWrapper>
        <Label>25%</Label>
        <Label>50%</Label>
        <Label>75%</Label>
        <Label>100%</Label>
      </OrderPercentageWrapper>
    );
  }
}
