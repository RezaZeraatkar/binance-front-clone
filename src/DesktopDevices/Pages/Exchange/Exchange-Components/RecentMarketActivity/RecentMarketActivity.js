import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import styled from 'styled-components';

// Custom Components
import Collapse from '../../../../UI/Collapse/Collapse';
import Popover from '../../../../UI/Popover/Popover';
import { Title } from '../../../../UI/Typography/Header/Headers';

const StyledRenderMarketActivity = styled.div`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  color: ${props => props.theme.colors.font.primary};
  border-bottom: ${props => props.theme.colors.border.primary};
`;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 5px;
  flex: 1 1 0;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;

function MockDataMaker() {
  const mockData = [];
  for (let i = 0; i < 100; i++) {
    mockData.push({
      [i]: {
        id: i,
        symbol: 'SKY',
        to: 'BTC',
        time: '12:30:30',
        duration: 'New 24h High',
        durationNumber: '24',
        percent: '+12.05%',
      },
    });
  }
  return mockData;
}

const HistoryTitle = (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    <Title>Recent Market Activity</Title>
    <Popover
      content="Notable movements in recent market activity shown below."
      overlayClassName="popover-recent-market-activity-overlay"
    >
      <FaQuestionCircle
        style={{ fontSize: '15px', color: '#F0B90B', fill: '#F0B90B' }}
      />
    </Popover>
  </span>
);

function ContentMaker(MockData) {
  const content = Object.keys(MockData).map(id => (
    <Panel key={id} id={id}>
      <Col>
        <Row>
          <span>{MockData[id][id].symbol}</span>/
          <span style={{ color: '#999999' }}>{MockData[id][id].to}</span>
        </Row>
        <Row style={{ color: '#999999' }}>{MockData[id][id].time}</Row>
      </Col>
      <Col>
        <Row>{MockData[id][id].percent}</Row>
        <Row>{MockData[id][id].duration}</Row>
      </Col>
      <Col>
        <Row>Icon</Row>
      </Col>
    </Panel>
  ));
  return content;
}

function RecentMarketActivity() {
  function onPanelClick(id) {
    console.log(id);
  }
  let mockData = MockDataMaker();

  return (
    <StyledRenderMarketActivity>
      <Collapse
        title={HistoryTitle}
        content={ContentMaker(mockData)}
        onPanelClick={onPanelClick}
      ></Collapse>
    </StyledRenderMarketActivity>
  );
}

export default RecentMarketActivity;
