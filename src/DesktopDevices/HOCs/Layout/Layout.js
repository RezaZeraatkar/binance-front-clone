import React from 'react';
import { Layout as AntLayout } from 'antd';

// Components
import NavHeader from '../../Components/NavHeader/NavHeader';

// Styles
import StyledLayout from './StyledLayout';

const { Header, Footer, Content } = AntLayout;

export default function Layout({ children }) {
  return (
    <StyledLayout className="ds_Layout">
      <Header>
        <NavHeader />
      </Header>
      <Content style={{ userSelect: 'none', minWidth: '1349px' }}>
        {children}
      </Content>
      <Footer style={{ minWidth: '1349px' }}>Footer</Footer>
    </StyledLayout>
  );
}
