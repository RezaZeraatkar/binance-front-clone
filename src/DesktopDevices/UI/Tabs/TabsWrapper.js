import styled from 'styled-components';

const TabsWrapper = styled.div`
  position: relative;
  flex: 0 1 285px;
  min-width: 285px;
  & .ant-tabs-bar {
    background-color: #f7f7f7;
    margin: 0px;
    height: 35px;
    font-size: 12px;
    padding: 4px;
    border: 1px solid #e6e6e6;
    border-bottom: 0px;
  }
  /* ant nav header style*/
  & .ant-tabs-nav div {
    display: flex;
    align-items: center;
    height: 22px !important;
    & .ant-tabs-tab {
      padding: 0 !important;
      margin-right: 5px !important;
      border: 1px solid #e6e6e6 !important;
      border-radius: 0px 0px 0px 0px !important;
      &:hover {
        color: #f0b90b !important;
      }
    }
    & .ant-tabs-tab-active {
      outline: 0px !important;
      height: 22px !important;
      margin-right: 4px;
      color: #f0b90b !important;
      border: 1px solid #f0b90b !important;
      border-radius: 0px 0px 0px 0px;
      background-color: #fff9e7 !important;
    }
  }
`;

export default TabsWrapper;
