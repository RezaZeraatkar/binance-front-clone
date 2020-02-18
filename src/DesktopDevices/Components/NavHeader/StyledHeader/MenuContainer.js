import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${props => props.breakpoint + 'px'}) {
    & .menu_left {
      display: none;
    }
    & .menu_right {
      display: none;
    }
  }
`;

export default MenuContainer;
