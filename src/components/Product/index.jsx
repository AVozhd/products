import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styles from "./Product.module.scss";
import { selectProductData } from "../../store/selector";
import Detail from "../Detail";

const Product = ({ product }) => {
  if (!product) return null;

  return (
    <div className={styles.product}>
      <div className={styles.name}>Product Details:</div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.details}>
        <div>Details:</div>
        <Detail title="Price" value={product.price} />
        <Detail title="Category" value={product.category} />
        <Detail title="Downloads" value={product.downloads} />
        <Detail title="Uploaded" value={product.uploaded} />
        <Detail title="Rating" value={product.rating} />
      </div>
      <div className={styles.preview}>
        {product.previews.map((img, index) => (
          <img key={index} src={img} alt="city" />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectProductData
});

export default connect(mapStateToProps)(Product);
