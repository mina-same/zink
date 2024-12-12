"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import productsData from "../data/data.json";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { data } from "autoprefixer";
import ProductSearchResultCard from "./ProductSearchResultCard";
import styles from './searchPage.module.css';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]); // Array to store selected products
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchInputRef = useRef(null); // Reference to the search input container

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
    setIsSearching(false); // Stop searching
  };

  const matchingProducts = (productsData?.products || []).filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteProduct = (productId) => {
    setSelectedProducts(
      selectedProducts.filter(
        (selectedProducts) => selectedProducts.id !== productId
      )
    );
  };

  const addProduct = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      // Check if the product is already in the list
      if (prevSelectedProducts.some((product) => product.id === productId)) {
        return prevSelectedProducts; // Do nothing if the product is already added
      }
      // Find the product to add from the matchingProducts list
      const productToAdd = matchingProducts.find(
        (product) => product.id === productId
      );
      return [...prevSelectedProducts, productToAdd];
    });
  };

  const handelFoucs = () => {
    if (showSearchResults) {
      setShowSearchResults(false);
    } else {
      setShowSearchResults(true);
    }
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1

    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) => {
        // Ensure the price is a valid number
        if (
          typeof product.price !== "number" ||
          typeof newQuantity !== "number"
        ) {
          console.error(
            "Invalid price or quantity value",
            product.price,
            newQuantity
          );
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

  // Close search results when clicking outside the search input
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>

        {/* titile */}
        <div className={styles.subText}>
          Search Products to add them to your orders
        </div>

        {/* Search Input */}
        <div ref={searchInputRef} className={styles.searchInputContainer}>
          <TextField
            variant="standard"
            placeholder="Search Products and Variants"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handelFoucs}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#7F56D9" }} />
                </InputAdornment>
              ),
              className: styles.searchInput,
            }}
          />
        </div>

        {/* Search Results */}
        <div style={{ position: "relative" }}>
          {showSearchResults && (
            <div className={styles.searchResultsContainer}>
              {isLoading ? (
                // Display spinner during loading
                <CircularProgress />
              ) : searchQuery === "" ? (
                // Empty state when search query is empty
                <div className={styles.emptyCartSearch}>
                  <Image
                    src="/images/svg/empty-cart.svg"
                    alt="Empty Cart"
                    width={72}
                    height={92}
                    style={{ borderRadius: 8 }}
                  />
                  <div className={styles.emptyCartText}>
                    Added products will appear here
                  </div>
                </div>
              ) : matchingProducts.length > 0 ? (
                // Show results count when matches exist
                <div className={styles.searchResult}>
                  {matchingProducts.map((product) => (
                    <ProductSearchResultCard
                      key={product.id}
                      matchingProducts={product}
                      addProduct={addProduct}
                    />
                  ))}
                </div>
              ) : (
                // Message for no matches
                <div className={styles.emptyCartSearch}>
                  <div className={styles.emptyCartText}>No products found</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Empty Cart */}
        {selectedProducts.length === 0 && (
          <div className={styles.emptyCart}>
            <Image
              src="/images/svg/empty-cart.svg"
              alt="Empty Cart"
              width={72}
              height={92}
              style={{ borderRadius: 8 }}
            />
            <div className={styles.emptyCartText}>
              Added products will appear here
            </div>
          </div>
        )}

        {/* Order Products */}
        {selectedProducts.length > 0 && (
          <div>
            <div className={styles.orderDetails}>Order Details</div>

            <div className={styles.orderContainer} />
            {/* Only show the selected products */}
            {selectedProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
                deleteProduct={deleteProduct}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
            <div className={styles.priceLine} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.priceTotal}>Total</div>
              <div className={styles.priceStyle}>
                LE{" "}
                {selectedProducts.reduce(
                  (acc, product) => acc + product.totalPrice,
                  0
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Line */}
      <div className={styles.line} />

      {/* Buttons */}
      <div className={styles.buttons}>
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
