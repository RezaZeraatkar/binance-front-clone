import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)(props => ({
  borderRadius: '0px !important',
  marginRight: props.mr ? '-1px' : '2px',
  width: props.buttonwidth,
}));

export default StyledButton;
