import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Pastries from './pages/Pastries';
import Drinks from './pages/Drinks';
import Cakes from './pages/Cakes';
import Locations from './pages/Locations';
import Cart from './pages/Cart';

import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(
      item => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />

      <Navbar cart={cart} />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/menu' element={<Menu />} />

        <Route
          path='/menu/pastries'
          element={<Pastries addToCart={addToCart} />}
        />

        <Route
          path='/menu/drinks'
          element={<Drinks addToCart={addToCart} />}
        />

        <Route
          path='/menu/cakes'
          element={<Cakes addToCart={addToCart} />}
        />

        <Route
          path='/locations'
          element={<Locations />}
        />

        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;