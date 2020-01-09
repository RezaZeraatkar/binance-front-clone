import styled from 'styled-components';
import Theme from '../../../../Theme/ThemeProvider';
const StyledDropDown = styled.div`
  display: flex;
  @media (max-width: ${Theme.BreakPoints.md}) {
    display: none;
  }
`;
export default StyledDropDown;
