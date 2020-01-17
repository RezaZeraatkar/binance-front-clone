import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 100%;
  & .ant-menu-item-active a:hover,
  *:hover {
    color: #ccc;
  }
`;

export default MenuWrapper;
