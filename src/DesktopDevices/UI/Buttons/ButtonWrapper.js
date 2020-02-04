import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    flex: 1 1 auto;
    font-size: 12px;
    border-radius: 0px;
    border: 1px solid ${props => props.theme.colors.border.primary};
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.font.primary};
    :not(:last-child) {
      margin-right: 3px;
    }
    :hover {
      background-color: ${props => props.theme.colors.background.primary};
    }
  }
`;

export default ButtonWrapper;
