import React from "react";

import styles from "./Link.module.scss";

const Link = ({ children, ...props }) => (
  <div className={styles.link} {...props}>
    {children}
  </div>
);

export default Link;
