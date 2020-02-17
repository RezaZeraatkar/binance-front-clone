import React from 'react';
import { Layout as AntLayout } from 'antd';

// Components
import NavHeader from '../../Components/NavHeader/NavHeader';
import NavFooter from '../../Components/NavFooter/NavFooter';

// Styles
import StyledExchangeLayout from './StyledLayout';

const { Header, Footer, Content } = AntLayout;

export default function Layout({ children }) {
  return (
    <StyledExchangeLayout className="ds_Layout">
      <Header>
        <NavHeader />
      </Header>
      <Content style={{ userSelect: 'none' }}>{children}</Content>
      <Footer>
        <NavFooter />
      </Footer>
    </StyledExchangeLayout>
  );
}
