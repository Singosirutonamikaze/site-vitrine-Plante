import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Lists from './components/Lists';
import Chart from './components/Chart';
import Basket from './components/Basket';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="app-layout">
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart={cart} updateCart={updateCart} />} />
            <Route path="/lists" element={<Lists cart={cart} updateCart={updateCart} />} />
            <Route path="/produits" element={<Chart cart={cart} updateCart={updateCart} />} />
            <Route path="/panier" element={<Basket cart={cart} updateCart={updateCart} />} />
          </Routes>
        </div>
      </main>
      <Navigation cartCount={cartCount} />
    </div>
  );
}

export default App;
