import React from "react";

import styles from "./Detail.module.scss";

const Detail = props => (
  <div className={styles.detail}>
    <div>{props.title}</div>
    <div>{props.value}</div>
  </div>
);

export default Detail;
