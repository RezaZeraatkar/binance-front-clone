import styled from 'styled-components';
import { GiRoundStar } from 'react-icons/gi';

const IconWrapper = styled(GiRoundStar)`
  color: ${props => (props.isfavorite === 'true' ? '#f0b909' : '#000')};
  font-size: 16px;
`;

export default IconWrapper;
