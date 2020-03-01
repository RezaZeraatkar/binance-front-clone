import React from 'react';
import { Drawer as AntDrawer } from 'antd';

// Components
import DrawerTitle from './DrawerTitle';
import DrawerNavigations from './DrawerNavigations';

// Components
export default function Drawer({ visible, onCloseClick }) {
  return (
    <AntDrawer
      title={<DrawerTitle />}
      placement="right"
      closable={false}
      onClose={onCloseClick}
      visible={visible}
    >
      <DrawerNavigations />
    </AntDrawer>
  );
}
