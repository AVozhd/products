import React from "react";

import styles from "./Layout.module.scss";
import ErrorBoundary from "../../hoc/ErrorBoundary";

const Layout = ({ children }) => (
  <ErrorBoundary>
    <div className="page_content">
      <main className={styles.main}>{children}</main>
    </div>
  </ErrorBoundary>
);

export default Layout;
