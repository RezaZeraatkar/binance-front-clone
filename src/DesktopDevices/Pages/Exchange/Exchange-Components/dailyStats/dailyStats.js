import React from 'react';
import { Row, Col } from 'antd';
import numeral from 'numeral';

// Styles
import { StyledDailyStats } from './styled-dailystats';
import ColorizedText from '../../../../UI/Typography/Text/ColorizedText';
import ThemeMode from '../ThemeMode/ThemeMode';

export default function dailyStats(props) {
  return (
    <StyledDailyStats>
      <Row type="flex" justify="space-around">
        <Col xs={3}>{props.dailyStatsData.symbol}</Col>
        <Col xs={4}>
          <div style={{ fontSize: 12 }}>Last Price</div>
          <ColorizedText sign="neg">
            {numeral(Number(props.dailyStatsData.lastPrice)).format('0,000.00')}
          </ColorizedText>
        </Col>
        <Col xs={4}>
          <div style={{ fontSize: 12 }}>24h Change</div>
          <ColorizedText sign="pos">
            {numeral(Number(props.dailyStatsData.priceChange)).format('0.00')}{' '}
            {Number(props.dailyStatsData.priceChangePercent).toFixed(2)}
          </ColorizedText>
        </Col>
        <Col xs={3}>
          <div style={{ fontSize: 12 }}>24h High</div>
          <ColorizedText>
            {numeral(props.dailyStatsData.highPrice).format('0,000.00')}
          </ColorizedText>
        </Col>
        <Col xs={3}>
          <div style={{ fontSize: 12 }}>24h Low</div>
          <ColorizedText>
            {numeral(props.dailyStatsData.lowPrice).format('0,000.00')}
          </ColorizedText>
        </Col>
        <Col xs={4}>
          <div style={{ fontSize: 12 }}>24h Volume</div>
          <ColorizedText>
            {numeral(props.dailyStatsData.quoteVolume).format('000,000,000.00')}
          </ColorizedText>
        </Col>
        <Col xs={2}>
          <ThemeMode />
        </Col>
      </Row>
    </StyledDailyStats>
  );
}
