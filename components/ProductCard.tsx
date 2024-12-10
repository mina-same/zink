import { Padding } from "@mui/icons-material";
import Image from "next/image";
import React, { CSSProperties } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const styles: {
  stockText: CSSProperties;
  stockBadge: CSSProperties;
  container: CSSProperties;
  category: CSSProperties;
  name: CSSProperties;
  NamesContainer: CSSProperties;
  right: CSSProperties;
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
    boxShadow: "0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
    borderRadius: 8,
    overflow: "visible", // Make sure the shadow isn't clipped
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
    gap: 100,
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
};

const ProductCard = ({ kay, productData }) => {
  return (
    <div style={styles.container}>
      <Image
        src={productData.image}
        alt={productData.name}
        width={130}
        height={198}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1}}>
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

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                gap: "10px",
              }}
            >
              <div>
                <span
                  style={{
                    color: "#372166",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "400",
                  }}
                >
                  Size:{" "}
                </span>
                <span
                  style={{
                    color: "#372166",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "700",
                  }}
                >
                  {productData.size}
                </span>
              </div>

              <div>
                <span
                  style={{
                    color: "#372166",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "400",
                  }}
                >
                  Color:{" "}
                </span>
                <span
                  style={{
                    color: "#372166",
                    fontSize: 14,
                    fontFamily: "Arial",
                    fontWeight: "700",
                  }}
                >
                  {productData.color}
                </span>
              </div>
            </div>
          </div>

          {/* price */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "end",
            }}
          >
            <Image
              src="/images/svg/Delete.svg"
              alt="delete"
              width={24}
              height={24}
            />

            <div
              style={{
                width: "100%",
                textAlign: "right",
                color: "#6941C6",
                fontSize: 20,
                fontFamily: "Arial",
                fontWeight: "400",
              }}
            >
              LE {productData.price}
            </div>
          </div>
        </div>

        {/*  */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Item Packaging */}
          <div>
            <div
              style={{
                color: "#344054",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                lineHeight: "24px",
              }}
            >
              Item Packaging
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                background: "white",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
              }}
            >
              <div style={{ flex: 1, display: "flex" }}>
                <span
                  style={{
                    color: "#3D3D3D",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  Default package{" "}
                </span>
                <span
                  style={{
                    color: "#8A8A8A",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  (free)
                </span>
              </div>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RiArrowDropDownLine
                  style={{ fontSize: "20px", color: "#344054" }}
                />
              </div>
            </div>
          </div>

          {/* Quantity */}
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
                1
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
