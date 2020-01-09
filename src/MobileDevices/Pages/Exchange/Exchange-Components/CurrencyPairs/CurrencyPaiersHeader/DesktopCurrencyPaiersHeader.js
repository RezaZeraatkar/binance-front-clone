import React, { Component } from 'react';
import { Icon, Radio, Row, Select } from 'antd';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';
import StyledSearch from './StyledSearch';

const { Option } = Select;

const state = {
  value: '1',
};

export default class CurrencyPaiersHeader extends Component {
  onChange(e) {
    console.log('radio checked', e.target.value);
    // this.setState({
    //   value: e.target.value,
    // });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <>
        <Row
          type="flex"
          justify="center"
          style={{
            marginBottom: '5px',
            backgroundColor: '#F7F7F7',
            padding: '4px',
          }}
        >
          <StyledButton size="small">
            <Icon type="star"></Icon>
          </StyledButton>

          <StyledButton size="small">BNB</StyledButton>
          <StyledButton size="small">BTC</StyledButton>
          <StyledSelect
            defaultValue="lucy"
            onChange={this.handleChange}
            size="small"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </StyledSelect>
          <StyledSelect
            defaultValue="lucy"
            onChange={this.handleChange}
            size="small"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </StyledSelect>
        </Row>
        <Row
          type="flex"
          justify="space-around"
          style={{
            marginBottom: '5px',
            padding: '4px',
          }}
        >
          <StyledSearch
            placeholder="search ..."
            onSearch={value => console.log(value)}
            size="small"
            style={{ width: '127px', padding: '0px', marginRight: '6px' }}
          />
          <Radio.Group
            size="small"
            onChange={e => this.onChange(e)}
            value={state.value}
          >
            <Radio style={{ fontSize: '12px' }} value={1}>
              Change
            </Radio>
            <Radio style={{ fontSize: '12px' }} value={2}>
              Volume
            </Radio>
          </Radio.Group>
        </Row>
      </>
    );
  }
}
