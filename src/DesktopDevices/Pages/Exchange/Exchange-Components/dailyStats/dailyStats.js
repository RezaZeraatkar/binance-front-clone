import React from 'react';
import { Row, Col } from 'antd';

// Styles
import { StyledDailyStats } from './styled-dailystats';
import ColorizedText from '../../../../UI/Typography/Text/ColorizedText';
import ThemeMode from '../ThemeMode/ThemeMode';

function toFixedFormater (num) {
  if (num) {
    return Number(num).toFixed(2);
  } else {
    return '';
  }
}

export default function dailyStats (props) {
  return (
    <StyledDailyStats>
      <Row type='flex' justify='space-around'>
        <Col xs={3}>{props.dailyStatsData.symbol}</Col>
        <Col xs={4}>
          <div>Last Price</div>{' '}
          <ColorizedText sign='neg'>
            {toFixedFormater(props.dailyStatsData.lastPrice)}
          </ColorizedText>
        </Col>
        <Col xs={4}>
          <div>24h Change</div>
          <ColorizedText sign='pos'>
            {toFixedFormater(props.dailyStatsData.priceChange)} +
            {props.dailyStatsData.priceChangePercent}
          </ColorizedText>
        </Col>
        <Col xs={3}>
          <div>24h High</div>
          <ColorizedText>
            {toFixedFormater(props.dailyStatsData.highPrice)}
          </ColorizedText>
        </Col>
        <Col xs={3}>
          <div>24h Low</div>
          <ColorizedText>
            {' '}
            {toFixedFormater(props.dailyStatsData.lowPrice)}
          </ColorizedText>
        </Col>
        <Col xs={4}>
          <div>24h Volume</div>
          <ColorizedText>
            {toFixedFormater(props.dailyStatsData.quoteVolume)}
          </ColorizedText>
        </Col>
        <Col xs={2}>
          <ThemeMode />
        </Col>
      </Row>
    </StyledDailyStats>
  );
}
