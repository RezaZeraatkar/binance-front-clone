import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  & span.ant-table-column-title {
    color: #999999 !important;
  }
  & .ant-table-wrapper .ant-table {
    border: 0px;
  }

  & .ant-table-content .ant-table-body {
    background-color: transparent !important;
    width: 100%;
  }

  & .ant-table-wrapper .ant-table-thead tr th {
    border: 0px;
  }

  & .ant-table-wrapper .ant-table-tbody tr td {
    border-bottom: 2px solid white;
    border-bottom: 0px;
    color: #333;
  }
`;

const TableWrapper = styled.div`
  & table {
    font-size: 12px;
  }
  /* head */
  & table tr th span {
    padding: 0px 2px;
  }
  & table tr th:nth-child(1) {
    text-align: left;
  }
  & table tr th:nth-child(2) {
    text-align: left;
  }
  & table tr th:nth-child(3) {
    text-align: right;
  }
  /* Rows */
  & table tr {
    height: 21px;
  }
  & table tr td:nth-child(1) {
    text-align: left;
    & > span {
      padding-left: 8px;
    }
  }
  & table tr td:nth-child(2) {
    text-align: center;
    padding-right: 8px !important;
    margin-left: 8px !important;
  }
  & table tr td:nth-child(3) {
    text-align: right;
    padding-right: 8px !important;
  }
`;

function TableWrapperHOC(props) {
  return (
    <TableWrapper>
      <ListWrapper>{props.children}</ListWrapper>
    </TableWrapper>
  );
}

export default TableWrapperHOC;
