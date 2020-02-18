import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 100%;
  width: 100%;
  background-color: transparent;
  padding-left: 24px;
  & .ant-menu-item-active a:hover,
  *:hover {
    color: #ccc;
  }
  & > ul {
    background-color: transparent;
  }
`;

export default MenuWrapper;
