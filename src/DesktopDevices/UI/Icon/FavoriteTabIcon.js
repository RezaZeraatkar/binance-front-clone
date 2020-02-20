import React from 'react';
import styled from 'styled-components';
import { GiRoundStar } from 'react-icons/gi';

const IconWrapper = styled(GiRoundStar)`
  font-size: 16px;
  background-color: ${props => props.theme.colors.background.primary};
`;

const FavoritesTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props =>
    props.active === '1' ? '#f0b909' : props.theme.colors.font.primary};
  border: 1px solid
    ${props =>
      props.active === '1' ? '#f0b909' : props.theme.colors.border.primary};
`;

function FavoritesTab({ active }) {
  return (
    <FavoritesTabWrapper active={active}>
      <IconWrapper />
    </FavoritesTabWrapper>
  );
}

export default FavoritesTab;
