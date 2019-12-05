export const initialSearchState = {
  value: "",
  loading: false,
  results: []
};

export const initialProductState = {};

const initialState = {
  search: {
    ...initialSearchState
  },
  product: {
    ...initialProductState
  }
};

export default initialState;
