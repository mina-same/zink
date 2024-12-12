import Image from "next/image";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import styles from "./ProductSearchResultCard.module.css"; // Import the CSS module

const ProductSearchResultCard = ({ matchingProducts, addProduct }) => {
  const handleAdding = () => {
    addProduct(matchingProducts.id);
  };

  return (
    <div>
      <div className={styles.container}>
        <Image
          src={matchingProducts?.image}
          alt={matchingProducts?.name}
          width={124}
          height={93}
          className={styles.image} // Optional: You can add styles here for the Image component
        />

        <div className={styles.right}>
          {/* name and category and stock and size and color */}
          <div className={styles.infoConatiner}>
            <div className="paddingTop">
              <p className={styles.category}>{matchingProducts?.category}</p>
              <h3 className={styles.name}>{matchingProducts?.name}</h3>
            </div>

            <div className={styles.colorAndSize}>
              <span className={styles.name}>{matchingProducts?.color}</span>
              <span> - </span>
              <span className={styles.name}>
                {matchingProducts?.size === "S"
                  ? "Small"
                  : matchingProducts?.size === "M"
                  ? "Medium"
                  : matchingProducts?.size === "L"
                  ? "Large"
                  : "Extra Large"}
              </span>
            </div>

            <div className={styles.colorSizeContainer}>
              <div>
                <span className={styles.sizeValue2}>Color: </span>
                <span className={styles.productColor}>
                  {matchingProducts?.color}
                </span>
              </div>
              <div>
                <span className={styles.sizeValue}>Size: </span>
                <span className={styles.quantityNumber}>One Size</span>
              </div>
            </div>
          </div>

          <div className={styles.stock}>
            <div className={styles.stockBadge}>
              <div className={styles.stockText}>
                <GoDotFill /> {matchingProducts?.inStock} left in stock
              </div>
            </div>
            <IoIosAddCircleOutline
              className={styles.add}
              onClick={handleAdding}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchResultCard;
