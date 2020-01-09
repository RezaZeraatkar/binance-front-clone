import React, { Component } from 'react';
import { Layout as AntLayout, Row, Col } from 'antd';

// Components
import TopNav from '../../UI/Navigation/TopNav/TopNav';

// styles
import LayoutWrapper from './LayoutStyles/LayoutWrapper';

const { Header, Content, Footer } = AntLayout;

export default class Layout extends Component {
  render () {
    return (
      <LayoutWrapper>
        <AntLayout>
          <Header>
            <TopNav />
          </Header>
        </AntLayout>
        <AntLayout>
          <Content>{this.props.children}</Content>
        </AntLayout>

        <AntLayout>
          <Row>
            <Col xs={0} lg={24}>
              <Footer>Footer</Footer>
            </Col>
          </Row>
        </AntLayout>
      </LayoutWrapper>
    );
  }
}
