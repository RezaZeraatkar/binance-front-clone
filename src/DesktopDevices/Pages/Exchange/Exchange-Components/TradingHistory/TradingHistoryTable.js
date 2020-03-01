import React from 'react';
import styled from 'styled-components';

// Components
import Scrollbar from '../../../../UI/Scrollbar/Scrollbar';

const StyledTable = styled.div`
  display: flex;
  flex: 100%;
  flex-direction: column;
  color: ${props => props.theme.colors.font.primary};
  border: 1px solid ${props => props.theme.colors.border.primary};
  box-sizing: border-box;
  font-size: 12px;
`;

const Tbody = styled.div`
  cursor: pointer;
`;

const Tr = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 7px 1px 7px;
`;

const Td = styled.div`
  :nth-child(1) {
    flex: 0 0 108px;
  }
  :nth-child(2) {
    flex: 0 0 108px;
  }
`;

export default function TradingHistoryTable({ columns, data }) {
  return (
    <>
      <StyledTable>
        <Scrollbar autoHeight autoHeightMin={333} hideTracksWhenNotNeeded>
          <Tbody>
            {data.map(row => (
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
