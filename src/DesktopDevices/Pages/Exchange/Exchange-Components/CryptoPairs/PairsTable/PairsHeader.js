import React, { Component } from 'react';
import { Input, Radio } from 'antd';
import styled from 'styled-components';

// Styles
const PairsHeaderWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
`;

const StyledSearch = styled(Input.Search)`
  flex: 40%;

  & input {
    box-shadow: 0 0 0 0 #d9d9d9 !important;
    border-radius: 0px;
    border-color: ${props => props.theme.colors.border.primary};
    background-color: ${props => props.theme.colors.background.primary};
    :focus {
      border-color: #f0b90b !important;
    }
    :hover {
      border-color: #f0b90b !important;
    }
  }
  & .ant-input-search-icon {
    color: ${props => props.theme.colors.font.primary};
  }
`;

const RadioGroupWrapper = styled(Radio.Group)`
  display: flex !important;
  flex: 60%;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  /* change and volume label containers*/
  & label {
    display: block;
    font-size: 12px;
    color: ${props => props.theme.colors.font.primary};
    margin: 0px;
  }
  /* radio border color */
  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 0 !important;
    border: 1px solid #f0b90b;
  }
  & .ant-radio:hover {
    & span.ant-radio-inner {
      border: 1px solid #f0b90b !important;
    }
  }
  & .ant-radio-inner {
    /* dot background color */
    background-color: ${props => props.theme.colors.background.primary};
    :hover {
      border: 1px solid #f0b90b !important;
    }
  }
  & .ant-radio-checked .ant-radio-inner {
    border: 1px solid #f0b90b;

    /* dot color */
    :after {
      background-color: #f0b90b;
    }
  }
`;

export default class PairsHeader extends Component {
  state = {
    value: 1,
  };
  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  onSearchChange = e => {
    let searchedText = e.target.value;
    this.props.onSearchFilter(searchedText);
  };
  render() {
    return (
      <PairsHeaderWrapper>
        <StyledSearch
          placeholder="search ..."
          onChange={this.onSearchChange}
          size="small"
        />
        <RadioGroupWrapper
          onChange={this.onRadioChange}
          value={this.state.value}
          size="small"
        >
          <Radio value={1}>Change</Radio>
          <Radio value={2}>Volume</Radio>
        </RadioGroupWrapper>
      </PairsHeaderWrapper>
    );
  }
}
