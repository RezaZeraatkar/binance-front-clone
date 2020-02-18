// ******************** Third Party Libs and Components ********************
import React, { useState } from 'react';

// ******************** Custom Components ********************
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

// ******************** Header Styles ********************
import MenuWrapper from './StyledHeader/MenuWrapper';
import MenuContainer from './StyledHeader/MenuContainer';
import Register from './Register/Register';
import Drawer from './Drawer';
import BurgerBotton from './BurgerButton';
import Logo from './Logo/Logo';
import styled from 'styled-components';

const AbsoultePosition = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  @media (min-width: ${props => props.breakpoint + 1 + 'px'}) {
    display: none;
  }
`;
// ******************** NavHeader Component ********************
export default function NavHeader() {
  // drawer visibility state
  const [visible, setVisible] = useState(false);
  const drawerCloseHandler = () => {
    setVisible(false);
  };
  const drawerOpenHandler = () => {
    setVisible(true);
  };
  // Navigatio header BreakPoint in pixel
  const breakpoint = 1024;
  return (
    <MenuWrapper className="ds-menu-wrapper">
      <Logo />
      <MenuContainer breakpoint={breakpoint}>
        {/* add className="menu_left" to hide <LeftMenu /> under breakpoint */}
        <LeftMenu mode="horizontal" />
        <RightMenu mode="horizontal" className="menu_right" />
        <AbsoultePosition breakpoint={breakpoint}>
          <Register />
          <BurgerBotton showDrawerClick={drawerOpenHandler} />
        </AbsoultePosition>
        <Drawer visible={visible} onCloseClick={drawerCloseHandler} />
      </MenuContainer>
    </MenuWrapper>
  );
}
