import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../Action_Types/Action_Types';

function * addOrderBookToStore (action) {
  try {
    const orderBook = yield call(() =>
      axios.get('/order-book').then(response => response.data),
    );
    yield put({
      type: actionTypes.GET_ORDER_BOOK_ASYNC,
      payload: orderBook,
    });
  } catch (err) {
    console.log('[GET_ORDER_BOOK_ERROR]: ', err);
  }
}

export default addOrderBookToStore;
