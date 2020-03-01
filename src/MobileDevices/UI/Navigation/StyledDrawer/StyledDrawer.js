import styled from 'styled-components';
import { Drawer } from 'antd';

const StyledDrawer = styled(Drawer)`
  & .ant-drawer-content {
    background-color: #1f2832;
    color: #fff;
  }
  /* ant drawer header */
  & .ant-drawer-header {
    background-color: #1f2832;
    border-bottom: 0px;
    color: #fff;
    display: flex;
    align-items: center;
  }
  & .ant-drawer-header .ant-drawer-title {
    width: 80%;
  }
  & .ant-drawer-close {
    color: #fff;
  }
  /* ant drawer body */
  & .ant-drawer-body ul.ant-menu li {
    font-size: 0.812rem;
  }
  & .ant-drawer-body ul.ant-menu .ant-menu-item-active a {
    color: #f0b90b;
  }
  & .ant-drawer-body ul.ant-menu .ant-menu-item-selected a {
    color: #f0b90b;
  }
`;

export default StyledDrawer;
