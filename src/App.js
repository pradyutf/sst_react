import './App.css';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import React from 'react';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    // if(cart[product.id])
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    console.log(newCart);
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CartContext.Provider value = {{cart,increaseQuantity,decreaseQuantity}}>
      <div className="App">
        <Categories onSelectCategory={setSelectedCategory} />
       
        <Cart/>
      
      </div>
    </CartContext.Provider>
  );
}

export default App;
// {{cart,increaseQuantity,decreaseQuantity}} => {cart:cart,increaseQuantity:increaseQuantity,decreaseQuantity:decreaseQuantity}