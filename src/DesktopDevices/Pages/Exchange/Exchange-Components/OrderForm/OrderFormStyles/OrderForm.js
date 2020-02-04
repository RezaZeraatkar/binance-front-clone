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
    border-right: 1px solid ${props => props.theme.colors.border.primary};
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

  /* labels */
  & .ant-form label {
    color: ${props => props.theme.colors.font.info};
    font-size: 13px;
  }
  & .ant-form-item-label {
    flex: 18%;
    text-align: left;
  }
`;

export default OrderForm;
