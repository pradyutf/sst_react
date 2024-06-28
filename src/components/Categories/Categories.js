import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => response.json())
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const unique = [...new Set(categories.map((item) => item.category))];
    setUniqueCategories(unique);
  }, [categories]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = categories.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [selectedCategory, categories]);

  return (
    <div>
      <h1>Categories</h1>

      <div
      style={{ cursor: "pointer", margin: "5px",display: "flex", justifyContent: "center"}}
      >
      {uniqueCategories.map((category, index) => (
        <div
          key={index}
          onClick={() => setSelectedCategory(category)}
          style={{ cursor: "pointer", margin: "5px",display: "flex"}}
        >
           <div
           style={{ cursor: "pointer",padding: "3px", margin: "5px", border: "1px solid black"}}>
          {category}
          </div>
        </div>
      ))}
      </div>

      <div>
        <h2>Products</h2>
        {selectedCategory ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Please select a category to see products.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;