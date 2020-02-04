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
    console.log('[pairsData]: ', this.state);
    const isLoading = Object.keys(pairsData).length === 0;

    return (
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
              <BNB bnbData={pairsData} />
            </WithLoading>
          </TabPane>
          <TabPane tab="BTC" key="3">
            <WithLoading isLoading={isLoading}>
              <BTC btcData={pairsData} />
            </WithLoading>
          </TabPane>
          <TabPane
            tab={
              <div>
                <AltsSelect altsData={pairsData} />
              </div>
            }
            key="4"
          >
            <WithLoading isLoading={isLoading}>
              <ALTS altsData={pairsData} />
            </WithLoading>
          </TabPane>
          <TabPane tab={<UsdSelect usdData={pairsData} />} key="5">
            <WithLoading isLoading={isLoading}>
              <USD usdData={pairsData} />
            </WithLoading>
          </TabPane>
        </Tabs>
      </TabsWrapper>
    );
  }
}
