import React, { Component } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

import * as actionTypes from '../../../../../ReduxStore/Ui/UiActionTypes/index';

const DarkMode = <span>Dark Mode</span>;
const LightMode = <span>Light Mode</span>;

const StyledThemeMode = styled.div`
  border: 1px solid ${props => props.theme.colors.border.primary};
  height: 23px;
  width: 28px;
  text-align: center;
  line-height: 0;
  padding: 4px;
  background-color: ${props => props.theme.colors.background.primary};
  cursor: pointer;
`;

const StyledFiSun = styled(FiSun)`
  color: #f0b90b;
`;

const StyledFaRegMoon = styled(FaRegMoon)``;

export default class ThemeMode extends Component {
  render() {
    const { dispatchThemeProvider } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginRight: '7px',
        }}
      >
        <StyledThemeMode key="light">
          <Tooltip placement="bottomRight" title={LightMode}>
            <StyledFiSun
              onClick={() => dispatchThemeProvider(actionTypes.LIGHT_MODE)}
            />
          </Tooltip>
        </StyledThemeMode>
        <StyledThemeMode key="dark">
          <Tooltip placement="bottomLeft" title={DarkMode}>
            <StyledFaRegMoon
              onClick={() => dispatchThemeProvider(actionTypes.DARK_MODE)}
            />
          </Tooltip>
        </StyledThemeMode>
      </div>
    );
  }
}
