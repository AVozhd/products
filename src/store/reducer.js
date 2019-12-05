import { setIn, set } from "immutable";

import createReducer from "../utils/createReducer";
import initialState from "./initialState";

import * as ACTION_TYPES from "./actions/types";

const changeSearchValue = (state, { payload }) =>
  setIn(state, ["search", "value"], payload);

const setLoading = value => state => setIn(state, ["search", "loading"], value);

const setResults = (state, { payload }) =>
  setIn(state, ["search", "results"], payload.results);

const setSearchError = (state, { payload }) =>
  setIn(state, ["search", "error"], payload.error);

const setProduct = (state, { payload }) => set(state, "product", payload);

export default createReducer(initialState, {
  [ACTION_TYPES.SEARCH_CHANGE]: changeSearchValue,
  [ACTION_TYPES.SEARCH_REQUEST]: setLoading(true),
  [ACTION_TYPES.SEARCH_REQUEST_SUCCESS]: [
    setResults,
    setSearchError,
    setLoading(false)
  ],
  [ACTION_TYPES.SEARCH_REQUEST_FAILURE]: setLoading(false),
  [ACTION_TYPES.GET_PRODUCT_SUCCESS]: setProduct
});
