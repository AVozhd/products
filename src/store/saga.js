import {
  all,
  takeLatest,
  delay,
  put,
  call,
  takeEvery
} from "redux-saga/effects";

import API from "../API";

import * as ACTION_TYPES from "./actions/types";
import {
  getProductRequestFailure,
  getProductRequestSuccess,
  lookupRequestFailure,
  lookupRequestSuccess,
  searchRequest,
  searchRequestFailure,
  searchRequestSuccess
} from "./actions";

function* searchReq({ payload }) {
  try {
    if (payload === "") return;
    yield delay(500);
    yield put(searchRequest());
    const res = yield call(API.searchRequest, { query: payload });
    yield put(searchRequestSuccess(res));
  } catch (e) {
    yield put(searchRequestFailure(e));
  }
}

function* lookupReq({ payload }) {
  try {
    const match = yield call(API.lookupRequest, { match_id: payload });
    yield put(lookupRequestSuccess(match));
  } catch (e) {
    yield put(lookupRequestFailure(e));
  }
}

function* getProductReq({ payload }) {
  try {
    const product = yield call(API.getProductRequest, { product_id: payload.product_id });
    yield put(getProductRequestSuccess(product));
  } catch (e) {
    yield put(getProductRequestFailure(e));
  }
}

function* Saga() {
  yield all([
    takeLatest(ACTION_TYPES.SEARCH_CHANGE, searchReq),
    takeEvery(ACTION_TYPES.LOOKUP_REQUEST, lookupReq),
    takeEvery(ACTION_TYPES.LOOKUP_REQUEST_SUCCESS, getProductReq),
  ]);
}

export default Saga;
