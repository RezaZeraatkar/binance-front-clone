import styled from 'styled-components';

const OrderFormsContainer = styled.div`
  background-color: #f7f7f7;
  border-radius: 0px !important;

  /* Topest Tabs -- Exchange, Margin ... */
  & .top-tab {
    & .ant-tabs-bar {
      margin-bottom: 0px;
      background-color: #ffffff;
    }
  }

  & .ant-tabs-tab {
    color: #333333 !important;
    font-size: 14px;
  }

  & .ant-tabs-tab-active {
    background-color: #f7f7f7 !important;
    border-bottom: 0px !important;
    border-radius: 0px !important;
  }

  /* Inner Tabs -- Limit, market, stop limit */

  & .order-form-tabs-container {
    & .ant-tabs-bar {
      border-bottom: 0px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
      background-color: #f7f7f7;
      margin-bottom: 0px;
      padding: 7px 0px;
    }
    & .ant-tabs-nav-wrap {
      border-bottom: 0px;
      padding: 0 0 0 10px;
    }
    & .ant-tabs-tab {
      background-color: #fff !important;
      border-radius: 24px !important;
      font-size: 14px;
      color: #333333;
    }
    & .ant-tabs-tab-active {
      color: #f0b90b !important;
      background-color: #f7f7f7 !important;
    }
  }
`;
export default OrderFormsContainer;
