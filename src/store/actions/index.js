import * as ACTION_TYPES from "./types";
import createAction from "../../utils/createAction";

export const changeSearch = createAction(ACTION_TYPES.SEARCH_CHANGE);

export const searchRequest = createAction(ACTION_TYPES.SEARCH_REQUEST);
export const searchRequestSuccess = createAction(
  ACTION_TYPES.SEARCH_REQUEST_SUCCESS
);
export const searchRequestFailure = createAction(
  ACTION_TYPES.SEARCH_REQUEST_FAILURE
);

export const lookupRequest = createAction(ACTION_TYPES.LOOKUP_REQUEST);
export const lookupRequestSuccess = createAction(ACTION_TYPES.LOOKUP_REQUEST_SUCCESS);
export const lookupRequestFailure = createAction(ACTION_TYPES.LOOKUP_REQUEST_FAILURE);


export const getProductRequest = createAction(ACTION_TYPES.GET_PRODUCT);
export const getProductRequestSuccess = createAction(ACTION_TYPES.GET_PRODUCT_SUCCESS);
export const getProductRequestFailure = createAction(ACTION_TYPES.GET_PRODUCT_FAILURE);
