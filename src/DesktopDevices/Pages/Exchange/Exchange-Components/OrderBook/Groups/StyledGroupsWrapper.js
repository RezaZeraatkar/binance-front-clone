import styled from 'styled-components';

const GroupsWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  & .groups-label {
    margin-right: 2px;
    color: ${props => props.theme.colors.font.info};
  }
`;
export default GroupsWrapper;
