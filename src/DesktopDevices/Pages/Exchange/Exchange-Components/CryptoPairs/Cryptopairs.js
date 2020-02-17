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

const CustomizeTabs = styled.div`
  & div .ant-tabs-tab-active {
    :nth-child(5) {
      border: 0px !important;
    }
    :nth-child(4) {
      border: 0px !important;
    }
  }
`;

const { TabPane } = Tabs;

export default class Cryptopairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      isfavorite: false,
      activeSelect: null,
    };
    this.onActiveSelectHandler.bind(this);
  }

  callback = key => {
    // change favorite color if selected
    if (key === '1') {
      this.setState({ isFavorite: true });
    } else {
      this.setState({ isFavorite: false });
    }
    // change active class from select options
    if (key < 4) {
      this.setState({ activeSelect: false });
    }
  };

  onActiveSelectHandler(activeTab) {
    // activeTab<Number>
    // select border on active option
    this.setState({ activeSelect: activeTab });
  }

  render() {
    const { pairsData } = this.props;
    const isLoading = Object.keys(pairsData).length === 0;

    return (
      <div id="custom-tab">
        <TabsWrapper className="tabs-wrapper" flex="100%">
          <CustomizeTabs>
            <Tabs onChange={this.callback} type="card" defaultActiveKey="3">
              <TabPane
                tab={
                  <FavoriteTabIcon isfavorite={`${this.state.isFavorite}`} />
                }
                key="1"
              >
                <WithLoading isLoading={isLoading}>
                  <Favorites favorites={this.state.favorites} />
                </WithLoading>
              </TabPane>
              <TabPane tab="BNB" key="2">
                <WithLoading isLoading={isLoading}>
                  <BNB bnbData={pairsData[0]} />
                </WithLoading>
              </TabPane>
              <TabPane tab="BTC" key="3">
                <WithLoading isLoading={isLoading}>
                  <BTC btcData={pairsData[1]} />
                </WithLoading>
              </TabPane>
              <TabPane
                tab={
                  <AltsSelect
                    altsData={pairsData[2]}
                    active={this.state.activeSelect === 4 ? true : false}
                    onActiveOption={this.onActiveSelectHandler.bind(this)}
                  />
                }
                key="4"
              >
                <WithLoading isLoading={isLoading}>
                  <ALTS altsData={pairsData[2]} />
                </WithLoading>
              </TabPane>
              <TabPane
                tab={
                  <UsdSelect
                    usdData={pairsData[3]}
                    active={this.state.activeSelect === 5 ? true : false}
                    onActiveOption={this.onActiveSelectHandler.bind(this)}
                  />
                }
                key="5"
              >
                <USD usdData={pairsData[3]} />
              </TabPane>
            </Tabs>
          </CustomizeTabs>
        </TabsWrapper>
      </div>
    );
  }
}
