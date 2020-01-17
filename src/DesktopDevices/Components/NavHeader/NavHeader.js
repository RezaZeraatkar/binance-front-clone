// ******************** Third Party Libs and Components ********************
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

// ******************** Custom Components ********************
import Logo from './Logo/Logo';
import Login from './Login/Login';
import Register from './Register/Register';
import Currency from './Currency/Currency';

// ******************** Header Styles ********************
import MenuWrapper from './StyledHeader/MenuWrapper';

// ******************** NavHeader Component ********************
export default function NavHeader() {
  return (
    <MenuWrapper className="ds-menu-wrapper">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Logo />
        </Menu.Item>
        <Menu.Item>
          <Link to="/markets" text="Markets">
            Markets
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/exchange" text="Exchange">
            Exchange
          </Link>
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <Login />
        </Menu.Item>
        <Menu.Item>
          <Register />
        </Menu.Item>
        <Menu.Item>
          <Currency />
        </Menu.Item>
      </Menu>
    </MenuWrapper>
  );
}
