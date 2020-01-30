import React, { Fragment } from 'react';
import styled from 'styled-components';

const TableContainer = styled.table``;
const Theader = styled.thead``;
const Tbody = styled.tbody``;

export default function Table({ dataSource, columns }) {
  return (
    <TableContainer>
      <Theader>
        {
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        }
      </Theader>
      <Tbody>
        {dataSource.map(row => (
          <Fragment>
            <tr key={row.key}>
              {columns.map(col => (
                <td>{row[col.dataIndex]}</td>
              ))}
            </tr>
            <tr></tr>
          </Fragment>
        ))}
      </Tbody>
    </TableContainer>
  );
}
