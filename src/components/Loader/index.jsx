import React from "react";
import cn from "classnames";

import styles from "./Loader.module.scss";

const Loader = ({ className }) => (
  <div className={styles.wrapper}>
    <div className={cn(styles.loader, className)} />
  </div>
);

export default Loader;
