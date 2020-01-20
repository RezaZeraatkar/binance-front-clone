import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';

const FavoriteIcon = styled(FiStar)`
  font-size: 16px;
  color: ${props => (props.isfavorite === 'true' ? 'red' : 'black')};
`;

export default FavoriteIcon;
