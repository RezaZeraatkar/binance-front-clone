import styled from 'styled-components';

const TabsWrapper = styled.div`
  position: relative;
  flex: 0 1 285px;
  min-width: 285px;
  margin-right: 5px;
  & .ant-tabs-bar {
    background-color: #f7f7f7;
    margin: 0px;
    height: 35px;
    font-size: 12px;
    padding: 4px;
    border: 1px solid rgb(230, 230, 230);
    border-bottom: 0px;
  }
  /* ant nav header style*/
  & .ant-tabs-nav div {
    display: flex;
    align-items: center;
    height: 22px;
    & .ant-tabs-tab {
      padding: 0 !important;
      margin-right: 5px !important;
      height: 23px !important;
      width: 31px !important;
      border: 1px solid rgb(230, 230, 230) !important;
      border-radius: 0px 0px 0px 0px !important;
      outline: 0px !important;
      &:focus,
      :active,
      :visited,
      ::selection {
        outline: 0px !important;
      }
    }
    & .ant-tabs-tab-active {
      outline: 0px !important;
      &:focus,
      :active,
      :visited,
      ::selection {
        outline: 0px !important;
      }
      margin-right: 4px;
      color: white !important;
      height: 23px !important;
      width: 31px !important;
      border: 1px solid rgb(240, 185, 11) !important;
      border-radius: 0px 0px 0px 0px;
    }

    & .ant-tabs & .ant-tabs-tab input {
      height: 20px;
      width: 30px;
      background-color: white;
      outline: 0px;
      outline: 0px !important;
      &:focus,
      :active,
      :visited,
      ::selection {
        outline: 0px !important;
      }
    }
  }
`;

export default TabsWrapper;
