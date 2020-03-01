import { LAST_PRODUCT_CHANGES } from '../../../ReduxStore/Action_Types/Action_Types';
export default function LoadInitialData () {
  return {
    type: LAST_PRODUCT_CHANGES,
    payload: 123,
  };
}
