  "use client";

  import { Padding } from "@mui/icons-material";
  import Image from "next/image";
  import React, { CSSProperties, useState } from "react";
  import { RiArrowDropDownLine } from "react-icons/ri";

  const styles: {
    stockText: CSSProperties;
    stockBadge: CSSProperties;
    container: CSSProperties;
    category: CSSProperties;
    name: CSSProperties;
    NamesContainer: CSSProperties;
    right: CSSProperties;
    dropdownContainer: CSSProperties;
    dropdownOption: CSSProperties;
    dropdownOptionDivider: CSSProperties;
    flexContainer: CSSProperties;
    sizeAndColor: CSSProperties;
    sizeTitle: CSSProperties;
    sizeValue: CSSProperties;
    colorTitle: CSSProperties;
    colorValue: CSSProperties;
    priceContainer: CSSProperties;
    priceValue: CSSProperties;
    packagingContainer: CSSProperties;
    packagingTitle: CSSProperties;
    packagingValue: CSSProperties;
    packagingValueSelected: CSSProperties;
    arrowDown: CSSProperties;
    quantityTitle: CSSProperties;
    quantityContainer: CSSProperties;
    quantityIncrement: CSSProperties;
    quantityValue: CSSProperties;
    quantityDecrement: CSSProperties;
  } = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      width: "590px",
      height: "100%",
      gap: 10,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      paddingBottom: 10,
      background: "white",
      boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.07)",
      borderRadius: 8,
      overflow: "visible", // Make sure the shadow isn't clipped
      marginBottom: 16,
    },
    category: {
      color: "#6941C6",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "400",
    },
    name: {
      color: "#372166",
      fontSize: 18,
      fontFamily: "Arial",
      fontWeight: "700",
    },
    NamesContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    right: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 70,
    },
    stockText: {
      textAlign: "right",
      color: "#372166",
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
    },
    stockBadge: {
      padding: "4px 8px",
      background: "#F2F5F7",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      display: "flex",
    },
    dropdownContainer: {
      position: "absolute",
      marginTop: "8px",
      padding: "8px",
      background: "white",
      boxShadow: "0px 1px 20px rgba(16, 24, 40, 0.05)",
      borderRadius: "8px",
      border: "1px solid #D0D5DD",
      zIndex: 10,
      width: "fit content",
    },
    dropdownOption: {
      padding: "8px",
      color: "#344054",
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "400",
      cursor: "pointer",
    },
    dropdownOptionDivider: {
      borderBottom: "1px solid #D0D5DD",
    },
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      flex: 1,
    },
    sizeAndColor: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
      gap: "10px",
    },
    sizeTitle: {
      color: "#372166",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "400",
    },
    sizeValue: {
      color: "#372166",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "700",
    },
    colorTitle: {
      color: "#372166",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "400",
    },
    colorValue: {
      color: "#372166",
      fontSize: 14,
      fontFamily: "Arial",
      fontWeight: "700",
    },
    priceContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "end",
    },
    priceValue: {
      width: "100%",
      textAlign: "right",
      color: "#6941C6",
      fontSize: 20,
      fontFamily: "Arial",
      fontWeight: "400",
    },
    packagingContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
    },
    packagingTitle: {
      color: "#344054",
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      lineHeight: "24px",
    },
    packagingValue: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 16px",
      background: "white",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      border: "1px solid #D0D5DD",
      borderRadius: "8px",
      cursor: "pointer",
    },
    packagingValueSelected: {
      color: "#3D3D3D",
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      fontWeight: "400",
    },
    arrowDown: {
      width: "16px",
      height: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    quantityTitle: {
      color: "#344054",
      fontSize: 14,
      fontFamily: "Inter",
      fontWeight: "500",
      lineHeight: "24px",
    },
    quantityContainer: {
      padding: "12px 16px",
      background: "white",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      border: "1px solid #D0D5DD",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    quantityIncrement: {
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#5A5A5A",
      fontSize: "20px",
      cursor: "pointer",
      opacity: 0.5,
    },
    quantityValue: {
      textAlign: "center",
      color: "#5A5A5A",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
    },
    quantityDecrement: {
      width: "20px",
      height: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#5A5A5A",
      fontSize: "20px",
      cursor: "pointer",
      opacity: 0.5,
    }
  };

  const ProductCard = ({
    kay,
    productData,
    deleteProduct,
    handleQuantityChange,
  }) => {
    const [quantity, setQuantity] = useState(productData.quantity);
    const [selectedPackaging, setSelectedPackaging] = useState(
      "Default packaging (free)"
    );
    const [showDropdown, setShowDropdown] = useState(false);

    const packagingOptions = [
      "Default packaging (free)",
      "Packaging one",
      "Packaging two",
    ];

    const handleOptionClick = (option) => {
      setSelectedPackaging(option);
      setShowDropdown(false);
    };

    const handleDelete = () => {
      deleteProduct(productData.id); // Call deleteProduct function passed from parent
    };

    const handleIncrement = () => {
      setQuantity((prev) => {
        const newQuantity = prev + 1;
        handleQuantityChange(productData.id, newQuantity); // Update quantity in the parent
        return newQuantity;
      });
    };

    const handleDecrement = () => {
      setQuantity((prev) => {
        if (prev > 1) {
          // Prevent quantity from going below 1
          const newQuantity = prev - 1;
          handleQuantityChange(productData.id, newQuantity); // Update quantity in the parent
          return newQuantity;
        }
        return prev; // Keep the quantity at 1
      });
    };

    return (
      <div style={styles.container}>
        <Image
          src={productData.image}
          alt={productData.name}
          width={130}
          height={198}
        />

        <div style={styles.flexContainer}>
          <div style={styles.right}>
            {/* name and category and insock and size and color */}
            <div>
              <div>
                <p style={styles.category}>{productData.category}</p>
                <div style={{ display: "flex", gap: 10 }}>
                  <h3 style={styles.name}>{productData.name}</h3>
                  <div style={styles.stockBadge}>
                    <div style={styles.stockText}>
                      {productData.inStock} left in stock
                    </div>
                  </div>
                </div>
              </div>

              <div style={styles.sizeAndColor}>
                <div>
                  <span style={styles.sizeTitle}>Size: </span>
                  <span style={styles.sizeValue}>{productData.size}</span>
                </div>

                <div>
                  <span style={styles.colorTitle}>Color: </span>
                  <span style={styles.colorValue}>{productData.color}</span>
                </div>
              </div>
            </div>

            {/* price */}
            <div style={styles.priceContainer}>
              <Image
                src="/images/svg/Delete.svg"
                alt="delete"
                style={{ cursor: "pointer" }}
                width={24}
                height={24}
                onClick={handleDelete}
              />

              <div style={styles.priceValue}>LE {productData.totalPrice}</div>
            </div>
          </div>

          <div style={styles.packagingContainer}>
            {/* Item Packaging */}
            <div>
              <div style={styles.packagingTitle}>Item Packaging</div>

              <div
                style={styles.packagingValue}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <div style={{ flex: 1, display: "flex" }}>
                  <span
                    style={styles.packagingValueSelected}
                  >
                    {selectedPackaging}
                  </span>
                </div>
                <div
                  style={styles.arrowDown}
                >
                  <RiArrowDropDownLine
                    style={{ fontSize: "20px", color: "#344054" }}
                  />
                </div>
              </div>
              {showDropdown && (
                <div style={styles.dropdownContainer}>
                  {packagingOptions.map((option, index) => (
                    <div
                      key={option}
                      style={{
                        ...styles.dropdownOption,
                        ...(index !== packagingOptions.length - 1 &&
                          styles.dropdownOptionDivider),
                      }}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity */}
            <div>
              <div
                style={styles.quantityTitle}
              >
                Quantity
              </div>
              <div
                style={styles.quantityContainer}
              >
                <div
                  style={styles.quantityIncrement}
                  onClick={() =>
                    handleQuantityChange(productData.id, productData.quantity + 1)
                  }
                >
                  +
                </div>
                <div
                  style={styles.quantityValue}
                >
                  {productData.quantity}
                </div>
                <div
                  style={styles.quantityDecrement}
                  onClick={() =>
                    handleQuantityChange(productData.id, productData.quantity - 1)
                  }
                >
                  -
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductCard;
