import styled from 'styled-components';

function textColorHandler (sign) {
  if (sign === 'neg') {
    return '#FF007A';
  } else if (sign === 'pos') {
    return '#70A800';
  } else {
    return 'white';
  }
}

const ColorizedText = styled.span`
  color: ${props => textColorHandler(props.sign)};
`;

export default ColorizedText;
