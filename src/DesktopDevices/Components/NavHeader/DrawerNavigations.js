import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export default function DrawerNavigations() {
  return (
    <div>
      <Menu mode="inline" style={{ width: 254 }}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="appstore" />
              <span>Markets</span>
            </span>
          }
        >
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="1">
          <Icon type="mail" />
          Buy Crypto
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="calendar" />
          Markets
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="setting" />
              <span>Trade</span>
            </span>
          }
        >
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span>Earn</span>
            </span>
          }
        >
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
