import styled from 'styled-components';

const OrderForm = styled.div`
  /* Global */
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
  /* form layouts */
  /* form item */
  & .ant-form .ant-form-item {
    display: flex;
    align-items: center;
    margin-bottom: 0px;
    height: 32px;

    /* ratio buttons */
    /* hidden label for ratio buttons */
    &.hiddenLabel .ant-form-item-label label {
      display: none;
    }
  }
  & .ant-form-item-control-wrapper {
    flex: 70%;
  }

  /* inputs */
  & .ant-input-number {
    position: relative;
    width: 100%;
    font-size: 12px;
    flex: 82%;
    align-items: center;
    border-radius: 0px;
    & input {
      color: rgb(51, 51, 51);
    }
  }
  & .ant-input-number-focused {
    box-shadow: none;
    border-color: #f0b90b;
  }
  /* labels */
  & .ant-form label {
    color: #666666;
    font-size: 13px;
  }
  & .ant-form-item-label {
    flex: 18%;
    text-align: left;
  }
`;

export default OrderForm;
