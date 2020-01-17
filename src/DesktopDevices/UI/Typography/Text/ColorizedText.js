import styled from 'styled-components';

function textColorHandler(sign) {
  if (sign === 'neg') {
    return '#FF007A';
  } else if (sign === 'pos') {
    return '#70A800';
  } else {
    return '#333333';
  }
}

const ColorizedText = styled.span`
  display: flex;
  flex: auto;
  align-items: center;
  font-size: ${props => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
  color: ${props => textColorHandler(props.sign)};
`;

export default ColorizedText;
