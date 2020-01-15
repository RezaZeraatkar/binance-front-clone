// Third party components
import React from 'react';
import { Row } from 'antd';

// DailyStats Components
import Symbol from './Symbol/Symbol';
import DailyStat from './DailyStat/DailyStat';
import ThemeMode from './ThemeMode/ThemeMode';

// Styles
import { StyledDailyStats } from './styled-dailystats';

export default function dailyStats ({ dailyStatsData, staticData }) {
  return (
    <StyledDailyStats>
      <Row type='flex' justify='space-around'>
        <Symbol symbolData={dailyStatsData.symbol} />
        <DailyStat statsData={dailyStatsData} staticData={staticData} />
        <ThemeMode />
      </Row>
    </StyledDailyStats>
  );
}
