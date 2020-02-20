import styled from 'styled-components';

const OrderFormsContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background.darkish};
  border-radius: 0px !important;

  /* Topest Tabs -- Exchange, Margin ... */
  & .top-tab {
    & .ant-tabs-bar {
      margin-bottom: 0;
      background-color: ${props => props.theme.colors.background.primary};
    }
  }
  & .ant-tabs-tab {
    border: 1px solid ${props => props.theme.colors.border.primary} !important;
    color: ${props => props.theme.colors.font.primary} !important;
    font-size: 14px;
  }

  & .ant-tabs-tab-active {
    background-color: ${props =>
      props.theme.colors.background.darkish} !important;
    border-bottom: 0px !important;
    border-radius: 0px !important;
  }
  /* Inner Tabs -- Limit, market, stop limit */

  & .order-form-tabs-container {
    & .ant-tabs-bar {
      border-bottom: 0px;
      border-left: 1px solid ${props => props.theme.colors.border.primary};
      border-right: 1px solid ${props => props.theme.colors.border.primary};
      background-color: ${props => props.theme.colors.background.darkish};
      margin-bottom: 0px;
      padding: 7px 0px;
    }
    & .ant-tabs-nav-wrap {
      border-bottom: 0px;
      padding: 0 0 0 10px;
    }
    & .ant-tabs-tab {
      background-color: ${props =>
        props.theme.colors.background.primary} !important;
      border-radius: 24px !important;
      font-size: 14px;
      color: ${props => props.theme.colors.font.primary};
      border: 1px solid ${props => props.theme.colors.border.primary} !important;
    }
    & .ant-tabs-tab-active {
      color: #f0b90b !important;
      background-color: ${props =>
        props.theme.colors.background.darkish} !important;
    }
  }
`;
export default OrderFormsContainer;
