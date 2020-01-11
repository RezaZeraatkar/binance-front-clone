import styled from 'styled-components';

const OrderFormsContainer = styled.div`
  background-color: #f7f7f7;

  /* Topest Tabs -- Exchange, Margin ... */
  & .top-tab {
    & .ant-tabs-bar {
      background-color: #ffffff;
    }
  }

  /* Inner Tabs -- Limit, market, stop limit */

  & .order-form-tabs-container {
    & .ant-tabs-bar {
      border-bottom: 0px;
      background-color: #f7f7f7;
    }
    & .ant-tabs-nav-wrap {
      border-bottom: 0px;
      padding: 0 0 0 10px;
    }
    & .ant-tabs-tab {
      background-color: #fff !important;
      border-radius: 24px !important;
      font-size: 14px;
      border: red solid red !important;
    }
    & .ant-tabs-tab-active {
      color: #f0b90b !important;
    }
    & .ant-tabs-tab:hover {
      color: unset !important;
    }
    & div.ant-tabs-ink-bar {
      display: none !important;
      width: 0px !important;
      height: 0px !important;
    }
  }
`;
export default OrderFormsContainer;
