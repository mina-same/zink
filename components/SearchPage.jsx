"use client";

import React, { useState } from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import productsData from "../data/data.json";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { data } from "autoprefixer";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#F9FAFB",
    baddingBottom: "100px",
  },
  header: {
    width: "640px",
    color: "#372166",
    fontSize: 32,
    fontFamily: "Arial, sans-serif",
    fontWeight: "700",
    backgroundColor: "#ffffff",
    padding: "24px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  subText: {
    width: "100%",
    color: "#344054",
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    lineHeight: "20px",
    padding: "0px 0px 0px 20px",
  },
  searchInputContainer: {
    width: "100%",
    maxWidth: 600,
    padding: "10px 14px",
    background: "#FFFFFF",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: 8,
    border: "1px solid #D0D5DD",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#101828",
    opacity: 0.5,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
    width: "640px",
  },
  emptyCart: {
    width: "600px",
    padding: 16,
    borderRadius: 8,
    border: "1px solid #D6BBFB",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    marginTop: 24,
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  },
  emptyCartText: {
    color: "#505D68",
    fontSize: 15,
    fontFamily: "Arial",
    fontWeight: "700",
  },
  searchResultsContainer: {
    width: "100%",
    maxWidth: 600,
    marginTop: 10,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    position: "absolute",
  },
  searchResultItem: {
    padding: "10px 14px",
    cursor: "pointer",
    color: "#101828",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
  },
};

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]); // Array to store selected products
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(true); // Show results if input isn't empty
  };

  const handleProductSelection = (product) => {
    if (
      !selectedProducts.some(
        (selectedProduct) => selectedProduct.id === product.id
      )
    ) {
      setSelectedProducts([...selectedProducts, product]); // Add product if it's not already selected
    }
    setSearchQuery(""); // Clear the search query
    setShowSearchResults(false); // Hide search results after selection
  };

  const matchingProducts = productsData?.products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter((selectedProducts) => selectedProducts.id !== productId));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
  
    setSelectedProducts(prevProducts =>
      prevProducts.map(product => {
        // Ensure the price is a valid number
        if (typeof product.price !== 'number' || typeof newQuantity !== 'number') {
          console.error('Invalid price or quantity value', product.price, newQuantity);
          return product;
        }
  
        // Calculate total price based on the product's price and new quantity
        const totalPrice = product.price * newQuantity;
  
        return product.id === id
          ? { ...product, quantity: newQuantity, totalPrice: totalPrice }
          : product;
      })
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.subText}>
          Search Products to add them to your orders
        </div>

        {/* Search Input */}
        <div style={styles.searchInputContainer}>
          <TextField
            variant="standard"
            placeholder="Search Products and Variants"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#7F56D9" }} />
                </InputAdornment>
              ),
              style: styles.searchInput,
            }}
          />
        </div>

        {/* Search Results */}
        {showSearchResults && matchingProducts?.length > 0 && (
          <div style={styles.searchResultsContainer}>
            {matchingProducts.map((product) => (
              <div
                key={product.id}
                style={styles.searchResultItem}
                onClick={() => handleProductSelection(product)}
              >
                {product.name}
              </div>
            ))}
          </div>
        )}

        {/* Empty Cart */}
        {selectedProducts.length === 0 && (
          <div style={styles.emptyCart}>
            <Image
              src="/images/svg/empty-cart.svg"
              alt="Empty Cart"
              width={72}
              height={92}
              style={{ borderRadius: 8 }}
            />
            <div style={styles.emptyCartText}>
              Added products will appear here
            </div>
          </div>
        )}

        {/* Order Products */}
        {selectedProducts.length > 0 && (
          <div>
            <div
              style={{
                width: "100%",
                color: "#101828",
                fontSize: 18,
                fontFamily: "Inter",
                fontWeight: "500",
              }}
            >
              Order Details
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "#EAECF0",
                marginTop: 10,
                marginBottom: 11,
              }}
            />
            {/* Only show the selected products */}
            {selectedProducts.map((product) => (
              <ProductCard key={product.id} productData={product}  deleteProduct={deleteProduct} handleQuantityChange={handleQuantityChange} />
            ))}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "#EAECF0",
                marginTop: 10,
                marginBottom: 11,
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "100%",
                  color: "#101828",
                  fontSize: 18,
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                Total
              </div>
              <div
                style={{
                  width: "100%",
                  color: "#6941C6",
                  fontSize: 20,
                  fontFamily: "Arial",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                LE {selectedProducts.reduce((acc, product) => acc + product.totalPrice, 0)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ width: "640px", height: "2px", background: "#EAECF0" }} />

      {/* Buttons */}
      <div style={styles.buttons}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#54E7AF",
            color: "#372166",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#41C896",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#372166",
            color: "#FFFFFF",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#29134E",
            },
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
