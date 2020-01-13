import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  & .ant-table-wrapper .ant-table-content td span {
    padding: 0 5px;
  }
  /* table header styles */
  & .ant-table-wrapper thead tr th:last-child {
    text-align: right;
  }
  & .ant-table-wrapper thead tr th {
    border: 0px;
  }
  & .ant-table-wrapper thead th span {
    color: #999999;
    font-size: 12px;
  }
  & div.ant-table-wrappe div.ant-table-header {
    overflow-y: hidden;
  }
  /* table body styles */

  & .ant-table-wrapper .ant-table {
    border: 0;
    font-size: 12px;
    color: #333333;
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

function TableWrapperHOC (props) {
  return (
    <TableWrapper className='table-wrapper'>
      <ListWrapper>{props.children}</ListWrapper>
    </TableWrapper>
  );
}

export default TableWrapperHOC;

// ListWrapper
// & .ant-table-wrapper .ant-table-header table {
//   width: 100%;
// }
// & .ant-table-wrapper .ant-table-tbody tr {
//   display: flex;
//   justify-content: space-between;
// }
// & span.ant-table-column-title {
//   color: #999999 !important;
// }
// & .ant-table-wrapper .ant-table {
//   border: 0px;
//   width: 100%;
// }

// & .ant-table-wrapper .ant-table-thead tr {
//   display: flex;
// }

// & .ant-table-wrapper .ant-table-thead tr th {
//   border: 0px;
//   flex: 33%;
// }

// & .ant-table-content .ant-table-body {
//   background-color: transparent !important;
//   width: 100%;
// }

// & .ant-table-wrapper .ant-table-tbody tr {
//   cursor: pointer;
// }

// & .ant-table-wrapper .ant-table-tbody tr td {
//   border-bottom: 2px solid white;
//   color: #333;
// }

// TableWrapper

// & table {
//   font-size: 12px;
// }
// /* head */
// & table tr th span {
//   padding: 0px 2px;
// }
// & table tr th:nth-child(1) {
//   text-align: left;
// }
// & table tr th:nth-child(2) {
//   text-align: left;
// }
// & table tr th:nth-child(3) {
//   text-align: right;
// }
// /* Rows */
// & table tr {
//   height: 21px;
// }
// & table tr td:nth-child(1) {
//   text-align: left;
//   & > span {
//     padding-left: 8px;
//   }
// }
// & table tr td:nth-child(2) {
//   text-align: center;
//   padding-right: 8px !important;
//   margin-left: 8px !important;
// }
// & table tr td:nth-child(3) {
//   text-align: right;
//   padding-right: 8px !important;
// }
