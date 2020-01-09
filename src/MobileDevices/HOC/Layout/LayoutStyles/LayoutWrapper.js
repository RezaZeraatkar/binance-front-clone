import styled from 'styled-components';

const LayoutWrapper = styled.div`
  background-color: #12161c;
  & .ant-layout {
    background-color: #12161c;
  }
  /* Global ant layout header styles */
  & .ant-layout-header {
    width: 100%;
    background-color: #1f2833;
    position: fixed;
    z-index: 1;
  }
  & .ant-layout .ant-layout-header .ant-menu {
    font-size: 0.73rem;
  }
  /* Global ant layout content styles --- Charts Tab Pane*/
  & .ant-layout-content .ant-tabs {
    font-size: 1rem;
    & .ant-tabs-bar {
      font-size: 0.9rem;
    }
    & .ant-tabs-content {
      font-size: 0.9rem;
    }
    & .ant-tabs-content .ant-tabs-content-kline-params {
      margin-top: 10px;
      font-size: 0.632rem;
    }
    &
      .ant-tabs-content
      .ant-tabs-chart
      .ant-tabs-bar
      .ant-tabs-nav-container
      .ant-tabs-nav
      div
      .ant-tabs-tab {
      font-size: 0.7rem;
      padding-left: 10px;
      padding-right: 10px;
    }
    &
      .ant-tabs-content
      .ant-tabs-bar
      .ant-tabs-nav-container
      .ant-tabs-nav
      div
      .ant-tabs-trade-history {
      font-size: 0.75rem;
      margin-top: 10px;
    }
  }
  /* Global ant layout content styles --- Trade Tab Pane*/
  & .ant-layout-content .ant-tabs {
    & .register-order {
      & .register-order-content {
        padding: 10px;
        & .ant-tabs-nav div .ant-tabs-tab {
          font-size: 0.732rem !important;
        }
        & .groups label {
          font-size: 0.632rem;
        }
        & .groups span {
          font-size: 0.632rem;
        }
      }
      margin-top: 0.6rem;
      & .ant-typography {
        font-size: 0.9rem;
      }
      & .ant-form-item-control span .ant-btn span {
        font-size: 0.732rem;
      }
      & .ant-table {
        font-size: 0.632rem;
      }
      & .order-forms-wrapper {
        min-height: 438px;
      }
      & .order-forms-wrapper button.ant-btn {
        height: auto;
      }
      & .order-forms-wrapper button span {
        font-size: 0.634rem;
        padding: 0.3rem 0;
      }
      & .order-forms-wrapper form div {
        margin-bottom: 0px;
      }
      & .order-forms-wrapper .ant-input-number-input-wrap {
        font-size: 0.634rem;
      }
      & .order-forms-buttons-group .ant-tabs-bar {
        margin-bottom: 0px;
        min-height: 37px;
      }
    }
    & .footer-order-btns {
      font-size: 2rem;
    }
  }
  /* Pairs Styles */
  & .pairs-toggle-wrapper {
    background: #14171a;
  }
  &
    .pairs-toggle-wrapper
    .ant-tabs-content
    .ant-tabs-tabpane
    .products-wrapper
    .ant-table-thead {
    display: none;
  }
  & .products-wrapper .ant-table-tbody tr {
    background-color: #14171a;
  }
  & .products-wrapper .ant-table-tbody tr td {
    color: white;
    border-bottom: 1px solid #23292f;
    padding: 0.7rem 0.3rem;
    font-size: 0.7rem;
    @media (min-width: 340px) {
      font-size: 0.768rem;
    }
    @media (min-width: 400px) {
      font-size: 0.867rem;
    }
  }
  & .products-wrapper .current-product {
    color: #ffffff;
    background-color: #1a1e22;
    font-size: 0.768rem;
    padding: 0.7rem;
  }

  & .pairs-toggle-wrapper .ant-tabs .ant-tabs-bar .ant-tabs-nav-container {
    padding: 0;
    & .ant-tabs-nav-wrap .ant-tabs-tab {
      @media (max-width: 376px) {
        font-size: 0.698rem;
        padding: 0px 0.578rem;
      }
      @media (min-width: 340px) {
        font-size: 0.789rem;
        padding: 0px 0.6rem;
      }
      @media (min-width: 377px) {
        font-size: 0.8rem;
        padding: 0px 0.6rem;
      }
      @media (min-width: 468px) {
        font-size: 0.832rem;
        padding: 0px 0.768rem;
      }
      @media (min-width: px) {
        font-size: 0.832rem;
        padding: 0px 0.768rem;
      }
    }
  }
  & .ant-tabs .ant-tabs-bar .ant-tabs-nav-container-scrolling {
    padding: 0px !important;
    & span {
      display: none;
    }
  }
`;

export default LayoutWrapper;
