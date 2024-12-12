import React from "react";
import styles from "./quantity.module.css";

const Quantity = ({ productData, handleQuantityChange }) => {
  return (
    <div>
      <div className={styles.quantityLabel}>
        Quantity
      </div>
      <div className={styles.quantityContainer}>
        <div
          className={styles.button}
          onClick={() =>
            handleQuantityChange(productData.id, productData.quantity + 1)
          }
        >
          +
        </div>
        <div className={styles.quantityText}>
          {productData.quantity}
        </div>
        <div
          className={styles.button}
          onClick={() =>
            handleQuantityChange(productData.id, productData.quantity - 1)
          }
        >
          -
        </div>
      </div>
    </div>
  );
};

export default Quantity;
