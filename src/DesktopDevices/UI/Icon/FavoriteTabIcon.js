import styled from 'styled-components';
import { GiRoundStar } from 'react-icons/gi';

const IconWrapper = styled(GiRoundStar)`
  color: ${props =>
    props.isfavorite === 'true' ? '#f0b909' : props.theme.colors.font.primary};
  font-size: 16px;
  background-color: ${props => props.theme.colors.background.primary};
`;

export default IconWrapper;
