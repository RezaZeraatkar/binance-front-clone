import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// Components

export default function LeftMenu({ mode, className }) {
  return (
    <Menu theme="dark" mode={mode} className={className}>
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
  );
}
