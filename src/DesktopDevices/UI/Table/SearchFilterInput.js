import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Search = styled.div`
  position: relative;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  color: ${props => props.theme.colors.font.primary};
  top: 2px;
  left: 3px;
  font-size: 18px;
`;

const SearchFilterInput = styled.input`
  outline: none;
  color: ${props => props.theme.colors.font.primary};
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border.primary};
  width: 100px;
  padding-left: 22px;
  :focus {
    border: 1px solid #efb80c;
  }
`;

export { Search, SearchIcon, SearchFilterInput };
