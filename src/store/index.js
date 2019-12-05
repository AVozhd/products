import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import reducer from "./reducer";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(createSagaMiddleware()))
);

export default store;
