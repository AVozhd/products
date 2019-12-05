import React from "react";

import styles from "./Detail.module.scss";

const Detail = ({ title, value }) => {
  if (!value) return null;

  return (
    <div className={styles.detail}>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};

export default Detail;
