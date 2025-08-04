import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Lists from './components/Lists';
import Chart from './components/Chart';
import Basket from './components/Basket';

function App() {
  return (
    <div>
      <Navigation />
      <section>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/lists" element={<Lists />}></Route>
            <Route path="/produits" element={<Chart />}></Route>
            <Route path="/panier" element={<Basket />}></Route>
          </Routes>
        </div>
      </section>
    </div>
  );
}

export default App;
