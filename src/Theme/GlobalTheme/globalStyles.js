import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    /* HEADER LAUOUT */
    & .ant-layout-header {
      background-color: ${props =>
        props.theme.colors.background.normal} !important;
        & .ant-menu-dark {
          background-color: transparent;
        }
    };
    /* POPOVER */
   & .ant-popover-inner-content {
     background-color: ${props => props.theme.colors.background.highlight};
   };
   & .ant-popover-arrow {
     border-color: ${props =>
       props.theme.colors.background.highlight} !important;
   };
    & .ant-select-dropdown-menu {
      padding: 0;
      border: 1px solid ${props => props.theme.colors.border.primary};
    background-color: ${props => props.theme.colors.background.primary};
      & .ant-select-dropdown-menu-item {
        padding: 1px 12px;
        color: ${props => props.theme.colors.font.primary};
        :hover {
          background-color: #616ce8;
          color: white;
        }
      }
      & .ant-select-dropdown-menu-item-selected {
        background-color: #616ce8;
        color: white;
        font-weight: normal;
      }
  }
  & .popover-trading-rules-overlay {
    & * {
      width: auto !important;
    }
  }

  /* ToolTip */
  & .ant-tooltip-inner {
    background-color: ${props => props.theme.colors.background.tooltip};
    color: ${props => props.theme.colors.font.tooltip};
    & span {
      font-size: 12px;
      }
  }
  & .ant-tooltip-arrow::before {
    background-color: ${props => props.theme.colors.background.tooltip};
  }
}`;
