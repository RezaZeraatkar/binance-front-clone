import React, { Component } from 'react';
import { Typography, Row, Col, Icon } from 'antd';
import styled from 'styled-components';

// Components
import CaretDownIcon from '../../../../UI/Icons/CaretDown';
import ColorizedText from '../../../../UI/Typography/Text/ColorizedText';

const { Text } = Typography;

const RowWrapper = styled(Row)`
  color: white;
  margin-top: 0.4rem;
`;

const SmText = styled.span`
  font-size: 0.632rem;
`;

const StyledText = styled(Text)`
  color: white !important;
  margin-left: 0.9rem;
  display: block;
  height: 1.1rem;
`;

export default class CurrencyLastChanges extends Component {
  render () {
    return (
      <RowWrapper type='flex'>
        {/* Currencies Ratio Indicator */}
        <Col xs={23}>
          <Row type='flex' justify='space-between'>
            <StyledText>
              BTC / USDT
              <CaretDownIcon
                onClick={this.props.showToggle}
                type='caret-down'
              />
            </StyledText>
            <div>
              <Icon type='star' />
              Favorites
            </div>
          </Row>
          <Row>
            <StyledText>
              <ColorizedText sign='neg'>7,147.18 </ColorizedText>
              <SmText>$6,452.26</SmText>
            </StyledText>
          </Row>
          <Row
            className='ant-tabs-content-kline-params'
            type='flex'
            justify='space-between'
            style={{ alignItems: 'center' }}
          >
            <Col>
              <StyledText>
                <ColorizedText sign='pos'>
                  <span>
                    -50.92 <span style={{ marginLeft: '6px' }}>-0.72</span>
                  </span>
                </ColorizedText>
              </StyledText>
              <StyledText>
                <span>Vol 186,014,469.02 USDT</span>
              </StyledText>
            </Col>
            <Col>
              <Row
                style={{
                  display: 'flex',
                  alignItems: 'end',
                  flexDirection: 'column',
                }}
              >
                <span>Low 7,220.00</span>
                <span>High 7,220.00</span>
              </Row>
            </Col>
          </Row>
        </Col>
      </RowWrapper>
    );
  }
}
