import styled from 'styled-components';

const TabsWrapper = styled.div`
  position: relative;
  flex: 0 1 280px;
  min-width: 280px;
  border: 1px solid #e6e6e6;

  b & .anticon {
    margin: 0px !important;
  }
  & .ant-tabs-bar {
    background-color: #f7f7f7;
    margin: 0px;
    height: 35px;
    font-size: 12px;
    padding: 4px;
    border-bottom: 0px;
  }
  & .ant-tabs-nav-container {
    height: auto !important;
  }
  /* ant nav header style*/
  & .ant-tabs-nav {
    display: flex;
    flex: 100%;
  }
  & .ant-tabs-nav div {
    :after {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    display: flex;
    align-items: center;
    height: 22px !important;
    flex: ${props => (props.flex ? props.flex : '0 0 auto')};
    & .ant-tabs-tab {
      display: flex;
      justify-content: center;
      flex: 1 0 auto;
      padding: 0 !important;
      background-color: white !important;
      border: 1px solid #e6e6e6 !important;
      font-size: 12px;
      color: #333333;
      border-radius: 0px !important;
      :last-child {
        margin-right: 0 !important;
      }
      &:not(:last-child) {
        margin-right: 4px !important;
      }
    }
    & .ant-tabs-tab-active {
      outline: 0px !important;
      height: 22px !important;
      color: #f0b90b !important;
      border: 1px solid #f0b90b !important;
      border-radius: 0px 0px 0px 0px;
      background-color: #fff9e7 !important;
    }
  }

  /* inkbar */
  & .ant-tabs-ink-bar {
    display: none !important;
    width: 0 !important;
  }
`;

export default TabsWrapper;
