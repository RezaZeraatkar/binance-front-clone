import styled from 'styled-components';

const OrderForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 260px;
  background: none;
  flex: 1 1 100%;
  margin: 15px 0px;
  padding: 0px 26px;
  &:first-child {
    border-right: 1px solid rgb(226, 226, 226);
  }
  & .ant-input-number:hover {
    /* border-color: ; */
  }
  & .ant-input-number-focused {
    box-shadow: none;
    border-color: #f0b90b;
  }
`;

export default OrderForm;
