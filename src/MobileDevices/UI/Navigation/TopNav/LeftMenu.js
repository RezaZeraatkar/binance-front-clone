import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Theme from '../../../../Theme/ThemeProvider';

const StyledMenu = styled(Menu)`
  color: white;
  border-bottom: 0px;
  padding-top: 8px;
  margin-right: 30px;
  background-color: #1f2833;
  border: 0px;
  @media (max-width: ${Theme.BreakPoints.md}) {
    display: ${props => (props.drawer ? 'block' : 'none')};
  }
  & li {
    border-bottom: 0px;
  }
`;

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render () {
    return (
      <StyledMenu
        mode={this.props.drawer ? 'inline' : 'horizontal'}
        style={{ float: 'left' }}
        drawer={this.props.drawer}
      >
        <Menu.Item key='Home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='Markets'>
          <Link to='/markets'>Markets</Link>
        </Menu.Item>
        <Menu.Item key='Exchange'>
          <Link to='/exchange'>Exchange</Link>
        </Menu.Item>
        <Menu.Item key='Support'>
          <Link to='/support'>Support</Link>
        </Menu.Item>
        <Menu.Item key='Language'>
          <Link to='/language'>Language</Link>
        </Menu.Item>
      </StyledMenu>
    );
  }
}
export default LeftMenu;
