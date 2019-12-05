import React from "react";

import styles from "./Layout.module.css";
import ErrorBoundary from "../../hoc/ErrorBoundary";

const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className="page_content">
      <main className={styles.main}>{children}</main>
    </div>
  </ErrorBoundary>
);

export default Layout;
