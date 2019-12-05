import { get } from "immutable";
import { createSelector } from "reselect";

import { initialProductState, initialSearchState } from "./initialState";

export const selectSearch = state => get(state, "search", initialSearchState);

export const selectSearchValue = createSelector(selectSearch, data =>
  get(data, "value", "")
);

export const selectSearchLoading = createSelector(selectSearch, data =>
  get(data, "loading", false)
);

export const selectSearchResults = createSelector(selectSearch, data =>
  get(data, "results", [])
);

export const selectProduct = state =>
  get(state, "product", initialProductState);

export const selectProductData = createSelector(selectProduct, data =>
  get(data, "product", null)
);
