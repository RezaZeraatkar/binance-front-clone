import React from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';

const Table = styled.div``;
const Tr = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 100%;
`;

const Thead = styled.div`
  background-color: ${props => props.theme.colors.background.darkish};
  color: ${props => props.theme.colors.font.info};
  border: 1px solid ${props => props.theme.colors.border.primary};
`;
const Th = styled.div`
  flex: auto;
  margin: 0 6px;
  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.border.primary};
  }
  height: 100%;
  display: flex;
  align-items: center;
`;

const Tbody = styled.div`
  border: 1px solid ${props => props.theme.colors.border.primary};
  border-top: 0px;
  display: none;
`;
const Td = styled.div`
  flex: auto;
  color: ${props => props.theme.colors.font.primary};
  margin: 0 6px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function OrdersTable({ columns, dataSource }) {
  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map(col =>
            typeof col.render === 'function' && col.render ? (
              <Th key={col.key}>
                <span>{col.render()}</span>
              </Th>
            ) : (
              <Th key={col.key}>
                <Tooltip placement="bottomLeft" title={col.title}>
                  {col.title}
                </Tooltip>
              </Th>
            ),
          )}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>test</Td>
          <Td>test</Td>
          <Td>test</Td>
          <Td>test</Td>
          <Td>test</Td>
          <Td>test</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
