import styled from 'styled-components';

const LinkContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.border.primary};
  font-size: 13px;
  color: ${props => props.theme.colors.font.primary};
  flex: 1 1 auto;
  text-align: center;
  height: 34px;
  line-height: 34px;
  & a {
    color: #f0b909;
    font-weight: bold;
  }
`;

export default LinkContainer;
