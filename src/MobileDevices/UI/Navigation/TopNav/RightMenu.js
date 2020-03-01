import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Theme from '../../../../Theme/ThemeProvider';

import CurrencyUnits from '../../Currency/Currency';

const StyledMenu = styled(Menu)`
  float: right;
  background-color: #1f2833;
  border-bottom: 0px;
  margin-top: 5px;
  @media (max-width: ${Theme.BreakPoints.md}) {
    display: block;
  }
  & li {
    border-bottom: 0px;
    padding: 0px 4px;
  }
`;

// const StyledButton = styled(Button)`
//   @media (max-width: ${Theme.BreakPoints.md}) {
//     border: 0px !important;
//     padding-top: 0 !important;
//     background-color: unset !important;
//     color: white !important;
//   }
// `;

class RightMenu extends Component {
  render () {
    return (
      <StyledMenu mode={this.props.drawer ? 'inline' : 'horizontal'}>
        <Menu.Item key='app'>
          {/* for desktop app <StyledButton type='primary'>Register</StyledButton> */}
          <Link to='/register'>Register</Link>
        </Menu.Item>
        <Menu.Item style={{ margin: '0 7px' }}>|</Menu.Item>
        <Menu.Item key='mail'>
          <Link to='/login'>Log In</Link>
        </Menu.Item>
        <Menu.Item>
          <CurrencyUnits />
        </Menu.Item>
      </StyledMenu>
    );
  }
}
export default RightMenu;
