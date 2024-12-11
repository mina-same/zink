import React from "react";

const Quantity = () => {
  return (
    <div>
      <div
        style={{
          color: "#344054",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "500",
          lineHeight: "24px",
        }}
      >
        Quantity
      </div>
      <div
        style={{
          padding: "12px 16px",
          background: "white",
          boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
          border: "1px solid #D0D5DD",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#5A5A5A",
            fontSize: "20px",
            cursor: "pointer",
            opacity: 0.5,
          }}
          onClick={() =>
            handleQuantityChange(productData.id, productData.quantity + 1)
          }
        >
          +
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#5A5A5A",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          {productData.quantity}
        </div>
        <div
          style={{
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#5A5A5A",
            fontSize: "20px",
            cursor: "pointer",
            opacity: 0.5,
          }}
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
