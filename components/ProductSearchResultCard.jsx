import Image from "next/image";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "590px",
    height: "136px",
    gap: 10,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    background: "white",
    boxShadow: "0px 4px 20px -2px rgba(16, 24, 40, 0.06)",
    borderRadius: 8,
    overflow: "visible", // Make sure the shadow isn't clipped
    marginBottom: 16,
  },
  category: {
    color: "##344054",
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
    display : "flex",
    justifyContent: "center",
    alignItems: "center", 
    color: "#372166",
    fontSize: 12,
    fontFamily: "Arial",
    fontWeight: "400",
  },
  stockBadge: {
    padding: "4px 8px",
    background: "#ecfef3",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    display: "flex",
  },
  colorAndSize: {
    display: "flex",
    gap: "10px",
    alignItems: "center", 
    justifyContent: "start",
  },
  infoConatiner: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  dot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "right",
  },
  add: {
    color: "#372166",
    fontSize: 24,
    cursor: "pointer",  
  }
};

  const ProductSearchResultCard = ({ matchingProducts, addProduct }) => {


    const handleAdding = () => {
      addProduct(matchingProducts.id); 
    }
  
  return (
    <div>
      <div style={styles.container}>
        <Image
          src={matchingProducts?.image}
          alt={matchingProducts?.name}
          width={124}
          height={93}
          style={{}}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
          }}
        >
          <div style={styles.right}>
            {/* name and category and insock and size and color */}
            <div style={styles.infoConatiner}>
              <div style={{paddingTop: "10px"}}>
                <p style={styles.category}>{matchingProducts?.category}</p>
                <h3 style={styles.name}>{matchingProducts?.name}</h3>
              </div>

              <div style={styles.colorAndSize}>
                <span style={styles.name}>{matchingProducts?.color}</span>
                <span> - </span>
                <span style={styles.name}>
                  {matchingProducts?.size == "S"
                    ? "Small"
                    : matchingProducts?.size == "M"
                    ? "Medium"
                    : matchingProducts?.size == "L"
                    ? "Large"
                    : "Extra Large"}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "10px",
                  gap: "10px",
                  marginBottom: "10px",
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
                    {matchingProducts?.color}
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
                    One Size
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
              <div style={styles.stockBadge}>
                <div style={styles.stockText}>
                  <GoDotFill /> {matchingProducts?.inStock} left in stock
                </div>
              </div>
              <IoIosAddCircleOutline style={styles.add} onClick={handleAdding}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchResultCard;
