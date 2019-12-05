import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = document.getElementById("root");

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, root);
