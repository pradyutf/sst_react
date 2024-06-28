import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from 'react';
import CartContext from "../../context/CartContext";

function Products({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h2>Products</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found for selected category.</p>
      )}
    </div>
  );
}

export default Products;