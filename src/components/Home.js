import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { plantList } from '../data/PlantLists';
import '../css/Home.css';

function Home({ cart, updateCart }) {
  const bestSellers = plantList.filter((p) => p.bestSale);

  const addToCart = (name, price) => {
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      updateCart(cart.map((item) =>
        item.name === name ? { ...item, amount: item.amount + 1 } : item
      ));
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div className='lmj-home'>
      <div className='lmj-home-hero'>
        {/* Panel gauche — clair */}
        <div className='lmj-hero-left'>
          <span className='lmj-hero-eyebrow'>PlantSale · Collection {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
          <h1 className='lmj-hero-title'>
            La nature,<br />
            <em>chez vous.</em>
          </h1>
          <p className='lmj-hero-desc'>
            Des plantes soigneusement sélectionnées pour embellir votre intérieur et enrichir votre quotidien.
          </p>
          <div className='lmj-home-actions'>
            <Link to='/lists' className='lmj-btn-primary'>
              <ion-icon name="storefront-outline"></ion-icon>
              Voir le catalogue
            </Link>
            <Link to='/chart' className='lmj-btn-secondary'>
              <ion-icon name="flask-outline"></ion-icon>
              Médicinales
            </Link>
          </div>
        </div>
        {/* Panel droit — forêt */}
        <div className='lmj-hero-right'>
          <div className='lmj-hero-cards-stack'>
            {plantList.slice(0, 3).map((plant, i) => (
              <div key={plant.id} className={`lmj-hcard lmj-hcard--${i}`}>
                <img src={plant.cover} alt={plant.name} />
                <div className='lmj-hcard-body'>
                  <span className='lmj-hcard-name'>{plant.name}</span>
                  <span className='lmj-hcard-price'>{plant.price} frcfa</span>
                </div>
              </div>
            ))}
          </div>
          <div className='lmj-hero-stats'>
            <div className='lmj-stat'>
              <span className='lmj-stat-num'>{plantList.length}</span>
              <span className='lmj-stat-label'>Plantes</span>
            </div>
            <div className='lmj-stat'>
              <span className='lmj-stat-num'>{new Set(plantList.map(p => p.category)).size}</span>
              <span className='lmj-stat-label'>Catégories</span>
            </div>
            <div className='lmj-stat'>
              <span className='lmj-stat-num'>100%</span>
              <span className='lmj-stat-label'>Naturel</span>
            </div>
          </div>
        </div>
      </div>

      {bestSellers.length > 0 && (
        <div className='lmj-bestsellers'>
          <h2>
            <ion-icon name="star-outline"></ion-icon>
            Meilleures ventes
          </h2>
          <div className='lmj-bestsellers-grid'>
            {bestSellers.map((plant) => (
              <div key={plant.id} className='lmj-bestseller-card'>
                <img src={plant.cover} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className='lmj-bestseller-price'>{plant.price} frcfa</p>
                <button onClick={() => addToCart(plant.name, plant.price)} className='lmj-btn-primary'>
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default Home;