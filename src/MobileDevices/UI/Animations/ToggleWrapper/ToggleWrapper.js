import styled from 'styled-components';
import { Col } from 'antd';

const ToggleWrapper = styled(Col)`
  display: flex;
  position: absolute;
  height: 100%;
  overflow:scroll;
  width: 100%;
  color: white;
  background-color: #1f2833;
  z-index: 999;
  /* display: ${props => (props.toggle === 'on' ? 'flex' : 'none')}; */
  transform: ${props =>
    props.toggle === 'up' ? 'translateY(1vh)' : 'translateY(-100%)'};
  transition: transform ease-in-out 0.4s;
  bottom: 0;
`;

export default ToggleWrapper;
