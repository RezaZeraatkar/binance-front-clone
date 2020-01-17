import styled from 'styled-components';

const StyledLayout = styled.div`
  /* Gloabl Header Styles */
  & .ant-layout-header {
    display: flex;
    align-items: center;
    background-color: #1e2126;
    & .ant-menu-item-selected {
      background-color: unset;
    }
  }
  /* Global Content Styles */
  & .ant-layout-content {
    background-color: #fff;
  }
  /* Global Footer Styles */
`;

export default StyledLayout;
