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
  /* ToolTip */
  /* Tabs */
  & .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: unset;
  }
  /* pairs table select active tabs */
  
}`;
