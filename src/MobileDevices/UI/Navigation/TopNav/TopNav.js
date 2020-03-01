import React, { Component } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

// ************* Custom Components ******************
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import Logo from '../../Logo/Logo';
import DrawerHeader from './DrawerHeader/DrawerHeader';
import MenuBars from '../../Menu/MenuBars/MenuBars';
import StyledDrawer from '../StyledDrawer/StyledDrawer';

// ************* Styles ******************
const MenuWrapper = styled.div`
  & .ant-menu {
    font-size: 1.2rem;
  }
`;

export default class TopNav extends Component {
  state = {
    current: 'mail',
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render () {
    return (
      <Row>
        <nav>
          <Logo />
          {/* Toggle Btn Component */}
          <MenuBars clicked={this.showDrawer} />
          <MenuWrapper>
            {/* Left Menu Compoent */}
            <LeftMenu />
            {/* Right Menu Compoent */}
            <RightMenu />
          </MenuWrapper>
          <div>
            <StyledDrawer
              title={<DrawerHeader />}
              placement='right'
              closable
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu drawer='true' />
            </StyledDrawer>
          </div>
        </nav>
      </Row>
    );
  }
}
