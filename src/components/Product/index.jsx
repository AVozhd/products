import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styles from "./Product.module.scss";
import { selectProductData } from "../../store/selector";

const Product = ({ product }) => {
  if (!product) return null;

  return (
    <div className={styles.product}>
      <div className={styles.name}>Product Details:</div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.details}>
        <h6>Details:</h6>
        {product.details}
      </div>
      <div className={styles.preview}>{product.preview}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductData
});

export default connect(mapStateToProps)(Product);
