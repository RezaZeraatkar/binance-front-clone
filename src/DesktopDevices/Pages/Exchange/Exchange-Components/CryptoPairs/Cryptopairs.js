import React, { Component } from 'react';
import { Tabs } from 'antd';

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

export default class Cryptopairs extends Component {
  state = {
    favorites: [],
    isfavorite: false,
  };

  callback = key => {
    // change favorite color if selected
    if (key === '1') {
      console.log(key);
      this.setState({ isFavorite: true });
    } else {
      console.log(key);
      this.setState({ isFavorite: false });
    }
  };

  render() {
    const { pairsData } = this.props;
    const isLoading = Object.keys(pairsData).length === 0;

    return (
      <div id="custom-tab">
        <TabsWrapper className="tabs-wrapper" flex="100%">
          <Tabs onChange={this.callback} type="card" defaultActiveKey="3">
            <TabPane
              tab={<FavoriteTabIcon isfavorite={`${this.state.isFavorite}`} />}
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
                <div>
                  <AltsSelect altsData={pairsData[2]} />
                </div>
              }
              key="4"
            >
              <WithLoading isLoading={isLoading}>
                <ALTS altsData={pairsData[2]} />
              </WithLoading>
            </TabPane>
            <TabPane tab={<UsdSelect usdData={pairsData[3]} />} key="5">
              <WithLoading isLoading={isLoading}>
                <USD usdData={pairsData[3]} />
              </WithLoading>
            </TabPane>
          </Tabs>
        </TabsWrapper>
      </div>
    );
  }
}
