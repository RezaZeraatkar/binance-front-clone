import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Scrollbar from '../../../../../UI/Scrollbar/Scrollbar';
import {
  Search,
  SearchIcon,
  SearchFilterInput,
} from '../../../../../UI/Table/SearchFilterInput';
import RadioGroup from '../../../../../UI/Radio/Radio';
import { CaretDown, CaretUp } from '../../../../../UI/Icons/Icons';

import TableHeader from '../../../../../UI/Table/TableHeader';

const StyledTable = styled.div`
  display: flex;
  flex: 100%;
  flex-direction: column;
  color: ${props => props.theme.colors.font.primary};
  box-sizing: border-box;
  font-size: 12px;
  cursor: pointer;
`;

const Tbody = styled.div`
  position: relative;
`;

const Tr = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 7px 1px 7px;
  :hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

const Thead = styled.div`
  color: ${props => props.theme.colors.font.info};
  font-weight: normal;
  border-bottom: 1px solid ${props => props.theme.colors.border.primary};

  & div {
    /* table header row */
    display: flex;
    justify-content: flex-start;
    :hover {
      background-color: unset;
    }
  }
`;

const Th = styled.div`
  /* table header th */
  :nth-child(1) {
    flex: 0 0 30px;
    & span {
      display: none;
    }
  }
  :nth-child(2) {
    flex: 0 0 100px;
  }
  :nth-child(3) {
    flex: 0 0 85px;
  }
  :nth-child(4) {
    flex: 0 0 75px;
  }
`;

const Td = styled.div`
  :nth-child(1) {
    flex: 0 0 5px;
  }
  :nth-child(2) {
    flex: 0 0 100px;
  }
  :nth-child(3) {
    flex: 0 0 100px;
  }
  :nth-child(4) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

export default function Table({ columns, data, showHeader }) {
  // initialize the state
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // filter based on Search input
  const [filterSearchInput, setFilterSearchInput] = useState('');
  const onSearchFilter = e => {
    const searchInput = e.target.value;
    setFilterSearchInput(searchInput);
    // filter the data and return new data list to filteredData state
    const newTableData = getFilteredDataList(searchInput);
    // update the table data
    setFilteredData(newTableData);
  };

  function getFilteredDataList(searchInput) {
    let newList = [];
    // if search bar is empty
    if (searchInput.length === 0) {
      newList = data;
    } else {
      // filter the currentList based on pairs
      newList = filteredData.filter(pairData => {
        return pairData.pair.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
    return newList;
  }

  // sort table descending (desc) or ascending (asc) | default: desc
  const [sort, setSort] = useState({ column: 'pair', dir: 'desc' });
  const HandleSortColumn = column => {
    const direction = sort.dir === 'desc' ? 'asc' : 'desc';
    const sortedList = immutableSort(filteredData, (a, b) => {
      // for pair column which is a type of string
      if (column === 'pair') {
        const val1 = a[column].toLowerCase();
        const val2 = b[column].toLowerCase();
        if (val1 < val2) {
          return -1;
        } else if (val1 > val2) {
          return 1;
        } else {
          return 0;
        }
      } else {
        // for other columns which are type of number
        return a[column] - b[column];
      }
    });
    if (direction === 'desc') {
      sortedList.reverse();
    }

    // update State with sorteddata
    setFilteredData(sortedList);
    setSort({ dir: direction, column: column });
  };

  // helper sort to immutably sort array of objects
  function immutableSort(arr, compareFunc) {
    return [...arr].sort(compareFunc);
  }

  return (
    <>
      {showHeader === 'true' ? (
        <TableHeader>
          {/* Search Component */}
          <Search>
            <SearchIcon />
            <SearchFilterInput
              value={filterSearchInput}
              onChange={onSearchFilter}
              placeholder={'Search ...'}
            />
          </Search>
          {/* Radio Groups Components */}
          <RadioGroup />
        </TableHeader>
      ) : null}
      <StyledTable>
        <Thead>
          <Tr>
            {columns.map(col => (
              <Th
                key={col.key}
                onClick={HandleSortColumn.bind(null, col.dataIndex)}
              >
                {col.title}
                {sort.column === col.dataIndex ? (
                  <span>
                    {sort.dir === 'desc' ? <CaretDown /> : <CaretUp />}
                  </span>
                ) : null}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Scrollbar autoHeight autoHeightMin={333} hideTracksWhenNotNeeded>
          <Tbody>
            {filteredData.map(row => (
              <Tr key={row.key}>
                {columns.map(col => (
                  <Td key={col.key}>{row[col.dataIndex]}</Td>
                ))}
              </Tr>
            ))}
            {/* <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan="10000">Loading...</td>
              ) : (
                <td colSpan="10000">
                Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                results
                </td>
                )}
              </tr> */}
          </Tbody>
        </Scrollbar>
      </StyledTable>
    </>
  );
}
