import styled from 'styled-components';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const CaretDown = styled(FaCaretDown)`
  color: ${props => props.theme.colors.font.info};
  line-height: 100%;
  position: relative;
  top: 2px;
  left: 2px;
`;

const CaretUp = styled(FaCaretUp)`
  color: ${props => props.theme.colors.font.info};
  line-height: 100%;
  position: relative;
  top: 2px;
  left: 2px;
`;

export { CaretDown, CaretUp };
