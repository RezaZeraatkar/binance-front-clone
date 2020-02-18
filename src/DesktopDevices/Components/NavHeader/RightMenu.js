import React from 'react';
import { Menu } from 'antd';

// Components
import Login from './Login/Login';
import Register from './Register/Register';
import Currency from './Currency/Currency';

export default function RightMenu({ mode, className, breakpoint }) {
  return (
    <Menu theme="dark" mode={mode} className={className}>
      <Menu.Item>
        <Login />
      </Menu.Item>
      <Menu.Item>
        <Register />
      </Menu.Item>
      <Menu.Item>
        <Currency breakpoint={breakpoint} />
      </Menu.Item>
    </Menu>
  );
}
