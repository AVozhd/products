import React from "react";

import Layout from "./components/Layout";
import Title from "./components/Title";
import Search from "./components/Search";
import Results from "./components/Results";
import Product from "./components/Product";

const App = () => (
  <Layout>
    <Title>Product Search</Title>
    <Search type="text" placeholder="Type something...." />
    <Results />
    <Product />
  </Layout>
);

export default App;
