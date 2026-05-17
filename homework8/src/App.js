import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

import avocado from "./images/avo.jpg";
import broccoli from "./images/bro.jpg";
import corn from "./images/corn.jpg";
import egg from "./images/egg.jpg";
import garlic from "./images/gar.jpg";
import mushroom from "./images/mush.jpg";
import onion from "./images/oni.jpg";
import potato from "./images/pot.jpg";
import tomato from "./images/tom.jpg";

function App() {
  const [cart, setCart] = useState([]);

  // Products directly inside App.js
  const products = [
    { id: 1, name: "Avocado", price: 3.99, image: avocado},
    { id: 2, name: "Broccoli", price: 1.99, image: broccoli},
    { id: 3, name: "Corn", price: 0.75, image: corn},
    { id: 4, name: "Egg", price: 5.99, image: egg},
    { id: 5, name: "Garlic", price: 0.99, image: garlic},
    { id: 6, name: "Mushroom", price: 2.99, image: mushroom},
    { id: 7, name: "Onion", price: 0.49, image: onion},
    { id: 8, name: "Potato", price: 0.49, image: potato},
    { id: 9, name: "Tomato", price: 0.89, image: tomato},
  ];

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;