import React, { Component } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';

// Components
import Favorites from '../../Exchange-Components/CryptoPairs/Favorites/Favorites';
import BNB from './BNB/BNB';
import BTC from './BTC/BTC';
import ALTS from './ALTS/ALTS';
import USD from './USD$/USD$';
import WithLoading from '../../../../HOCs/withLoading/withLoading';
import AltsSelect from './AltsSelect/AltsSelect';
import UsdSelect from './Usd$Select/Usd$Select';

// styles
import TabsWrapper from '../../../../UI/Tabs/TabsWrapper';
import FavoriteTabIcon from '../../../../UI/Icon/FavoriteTabIcon';

const { TabPane } = Tabs;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid
    ${props => (props.active ? '#f5bc00' : props.theme.colors.border.primary)};
  color: ${props =>
    props.active ? '#f5bc00' : props.theme.colors.font.primary};
  justify-content: center;
`;

function BnbTab({ active }) {
  return <Buttons active={active === '2' ? true : false}>BNB</Buttons>;
}

function BtcTab({ active }) {
  return <Buttons active={active === '3' ? true : false}>BTC</Buttons>;
}

export default class Cryptopairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      activeKey: '3', // default active tab on first render
    };
  }

  callback = key => {
    // active state color on tabs change
    this.setState({ activeKey: key });
  };

  render() {
    const { pairsData } = this.props;
    const { activeKey } = this.state;
    const isLoading = Object.keys(pairsData).length === 0;

    return (
      <div id="custom-tab">
        <TabsWrapper className="tabs-wrapper" flex="100%">
          <Tabs
            type="card"
            onTabClick={this.callback}
            defaultActiveKey={activeKey}
          >
            <TabPane tab={<FavoriteTabIcon active={activeKey} />} key="1">
              <WithLoading isLoading={isLoading}>
                <Favorites favorites={this.state.favorites} />
              </WithLoading>
            </TabPane>
            <TabPane tab={<BnbTab active={activeKey} />} key="2">
              <WithLoading isLoading={isLoading}>
                <BNB bnbData={pairsData[0]} />
              </WithLoading>
            </TabPane>
            <TabPane tab={<BtcTab active={activeKey} />} key="3">
              <WithLoading isLoading={isLoading}>
                <BTC btcData={pairsData[1]} />
              </WithLoading>
            </TabPane>
            <TabPane
              tab={
                <div>
                  <AltsSelect altsData={pairsData[2]} active={activeKey} />
                </div>
              }
              key="4"
            >
              <WithLoading isLoading={isLoading}>
                <ALTS altsData={pairsData[2]} />
              </WithLoading>
            </TabPane>
            <TabPane
              tab={<UsdSelect usdData={pairsData[3]} active={activeKey} />}
              key="5"
            >
              <USD usdData={pairsData[3]} />
            </TabPane>
          </Tabs>
        </TabsWrapper>
      </div>
    );
  }
}
