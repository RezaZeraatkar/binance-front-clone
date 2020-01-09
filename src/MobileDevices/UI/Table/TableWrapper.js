import styled from 'styled-components';

const TableWrapper = styled.div`
  & span.ant-table-column-title {
    /* color: #999999 !important; For Desktop */
  }
  & .ant-table-wrapper .ant-table {
    border: 0px;
  }

  & .ant-table-content .ant-table-body {
    background-color: transparent !important;
    width: 100%;
  }

  & .ant-table-wrapper .ant-table-thead tr th {
    /* display: none; For Desktop */
    border: 0px;
  }

  /* & .ant-table-content .ant-table-scroll {
    font-size: 12px !important;
  } For desktop */

  & .ant-table-wrapper .ant-table-tbody tr td {
    /* border-bottom: 2px solid white; for desktop */
    border-bottom: 0px;
    color: white;
  }
`;

export default TableWrapper;
