import styled from 'styled-components';

const TabsWrapper = styled.div`
  width: 100%;
  & div {
    /* Overriding ant design styles */
    & .ant-tabs-bar {
      background-color: #1f2833;
      color: white;
      margin-bottom: 0px;
      border-bottom: 0px;
    }
    & .ant-tabs-content .ant-tabs-tabpane {
      background-color: #1f2833;
    }
    & .ant-tabs-nav-wrap {
      width: 100%;
    }
    & .ant-tabs-nav {
      width: 100%;
      & .ant-tabs-ink-bar {
        display: none;
      }
    }
    & .ant-tabs-nav div {
      background-color: #1f2833 !important;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & > .ant-tabs-tab {
        border: 0px !important;
        background-color: #1f2833;
        font-size: 1rem;
        &.ant-tabs-tab-active {
          color: #f0b90b;
          border-bottom: 2px solid #f0b90b !important;
        }
      }
    }
  }
`;
export default TabsWrapper;
