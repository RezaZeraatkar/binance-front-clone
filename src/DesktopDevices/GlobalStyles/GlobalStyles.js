import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
      /* HEADER LAUOUT */
      /* Gloabl Header Styles */
    & .ant-layout-header {
      display: flex;
      flex: 0 1 100% !important;
      align-items: center;
      & .ant-menu-item-selected {
        background-color: unset;
      }
    }

    /* Footer LAUOUT */
      /* Gloabl Footer Styles */
    & .ant-layout-footer {
      background-color:#0B0E11;
      color: #ffffff;
      padding-bottom: 0;
    }
      
    /* POPOVER */
    & .popover-password-info .ant-popover-inner-content {
      padding: 5px !important;
      & p {
        margin: 0;
      }
    }
    /* Tabs */
    & .ant-menu.ant-menu-dark .ant-menu-item-selected {
      background-color: unset;
    }

    /* Menu Layout */ 
    & .ant-menu {
      background-color: transparent;
    }
    & .ant-menu-inline {
      border-right: none;
    }
    & .ant-menu-item {
      :hover {
        color: #cccccc;
      }
    }
    & .ant-menu-submenu-title {
      :hover {
        color: #cccccc;
      }
    }
    & .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after {
      background: #cccccc !important;
    }

    /* Ant Drawer */
    & .ant-drawer-mask {
      background-color: transparent;
    }
    & .ant-drawer-content-wrapper .ant-drawer-wrapper-body {
      background-color: #12161C;
      color: #ffffff;
      & .ant-drawer-header {
        background-color: transparent;
        border-bottom: 1px solid #333333;
      }
    }
  }
`;
