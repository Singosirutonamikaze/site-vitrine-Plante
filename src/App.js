import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
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

  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (name) => setToast(name);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="app-layout">
      {toast && (
        <div className="lmj-toast">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          <span><strong>{toast}</strong> ajouté au panier !</span>
        </div>
      )}
      <main className="main-content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart={cart} updateCart={updateCart} showToast={showToast} />} />
            <Route path="/lists" element={<Lists cart={cart} updateCart={updateCart} showToast={showToast} />} />
            <Route path="/produits" element={<Chart cart={cart} updateCart={updateCart} showToast={showToast} />} />
            <Route path="/panier" element={<Basket cart={cart} updateCart={updateCart} />} />
          </Routes>
        </div>
      </main>
      <Navigation cartCount={cartCount} />
    </div>
  );
}

export default App;
