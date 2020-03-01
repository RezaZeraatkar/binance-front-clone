import styled from 'styled-components';
import Theme from '../../../../Theme/ThemeProvider';

const TabsGroupWrapper = styled.div`
  &::before {
    content: ' ';
    display: block;
    height: 20px;
  }
  & .ant-tabs {
    background-color: transparent;
    color: #fff;
    & .ant-tabs-bar {
      background-color: transparent;
      margin-bottom: 1.8vh;
    }

    div.ant-tabs-nav-wrap div.ant-tabs-nav div {
      display: flex;
      justify-content: start;
      align-items: center;
      color: ${Theme.Colors.WarningColor};
      & .ant-tabs-tab {
        background-color: transparent !important;
        border-radius: 0px !important;
        border: 1px solid ${Theme.Colors.WarningColor} !important;
        margin: 0px !important;
        flex-basis: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
      }
    }
    &
      div.ant-tabs-nav-wrap
      div.ant-tabs-nav
      div
      div.ant-tabs-tab.ant-tabs-tab-active {
      background-color: ${Theme.Colors.WarningColor} !important;
      color: white;
    }
  }
`;

export default TabsGroupWrapper;
