import './ProductCard.css';
import ReduxAddToCart from '../ReduxAddtoCart/ReduxAddToCart';
import CartContext from "../../context/CartContext";
import { useRef, useState } from 'react';

import { useContext } from 'react';
function ProductCard({ product }) {
  // var a = 10;
  // a = a + 1;

  return (
    <div className="product-card">
      <p> {product.title}</p>
      <p> {product.price.value}</p>
      <img src='logo192.png'></img>
      
      <ReduxAddToCart product={product}/>
    </div>
    )
  }
  
export default ProductCard;
  