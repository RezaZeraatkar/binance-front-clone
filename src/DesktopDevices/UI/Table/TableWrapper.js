import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  & .ant-table-body {
    background-color: ${props =>
      props.theme.colors.background.primary} !important;
  }
  & .ant-table-wrapper {
    border-top: 0px;
  }
  & .ant-table-wrapper .ant-table-content td {
    padding: 0 5px !important;
  }
  /* table header styles */
  & .ant-table-wrapper thead tr th:last-child {
    text-align: right;
  }
  & .ant-table-wrapper thead tr th {
    border: 0px;
  }
  & .ant-table-wrapper thead th span {
    color: ${props => props.theme.colors.font.info};
    font-size: 12px;
  }
  & div.ant-table-wrappe div.ant-table-header {
    overflow-y: hidden;
  }

  & .ant-table-title {
    border-bottom: 1px solid ${props => props.theme.colors.border.primary} !important;
  }
  /* table body styles */

  & .ant-table-wrapper .ant-table {
    border: 0;
    font-size: 12px;
    color: ${props => props.theme.colors.font.primary};
  }
  & .ant-table-wrapper .ant-table .ant-table-tbody tr {
    cursor: pointer;
    height: 20px;
  }
  & .ant-table-wrapper .ant-table tr td {
    border: 0px;
  }
  & .ant-table-wrapper tbody tr td:last-child {
    text-align: right;
  }
  /* table footer styles */
  & .ant-table-footer {
    border: 0px !important;
  }
`;

const ListWrapper = styled.div``;

function TableWrapperHOC(props) {
  return (
    <TableWrapper className="table-wrapper">
      <ListWrapper>{props.children}</ListWrapper>
    </TableWrapper>
  );
}

export default TableWrapperHOC;
