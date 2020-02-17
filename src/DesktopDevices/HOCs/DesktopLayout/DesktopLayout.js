import React from 'react';
import { Layout } from 'antd';

import NavHeader from '../../Components/NavHeader/NavHeader';
import NavFooter from '../../Components/NavFooter/NavFooter';

const { Header, Footer, Content } = Layout;

export default function DesktopLayout({ children }) {
  return (
    <div>
      <Header>
        <NavHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <NavFooter />
      </Footer>
    </div>
  );
}
