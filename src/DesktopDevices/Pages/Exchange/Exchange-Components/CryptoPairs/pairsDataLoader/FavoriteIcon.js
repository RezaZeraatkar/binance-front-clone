import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';

const StyledFavoriteIcon = styled(FiStar)`
  font-size: 16px;
  position: relative;
  top: 2px;
  margin-right: 5px;
  fill: ${props =>
    props.isfavorite === 'true'
      ? props.theme.colors.background.favorite
      : props.theme.colors.background.primary};
  color: ${props => props.theme.colors.font.favorite};
`;

// convert this function to a class based component and
// then connect this component to the store and dispatch an action to get the favorites
// put some delay on redux saga and then dispatch another action to update the database for this
// clicked symbol
function FavoriteIcon({ id, isFavorite, symbol }) {
  const [isFavored, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    // change favorite icon fill color
    setIsFavorite(!isFavored);
    // change redux state of isFavorite for this symbol to true or false
    // ... redux action
    // call server to update favorite attribute of the specified symbol
    // ... saga action
  };
  useEffect(() => {
    // Get isFavorite for this symbol and update the state
    //  ... setIsFavorite(isFavoriteFromSymbolData[bool])
  }, [isFavored]);
  return (
    <StyledFavoriteIcon
      isfavorite={isFavored.toString()}
      onClick={handleFavorite}
    />
  );
}

export default FavoriteIcon;
