import styled from 'styled-components';

function textColorHandler({ sign, theme }) {
  if (sign === '-') {
    return '#FF007A';
  } else if (sign === '+') {
    return '#70A800';
  } else {
    return theme.colors.font.primary;
  }
}

const ColorizedText = styled.span`
  display: flex;
  flex: auto;
  align-items: center;
  font-size: ${props => (props.fontSize ? props.fontSize : 'inherit')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'bold')};
  color: ${props => textColorHandler(props)};
  :hover {
    font-weight: bold;
  }
`;
export default ColorizedText;
