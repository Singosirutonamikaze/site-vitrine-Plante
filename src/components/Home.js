import React, { Component } from 'react';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className='lmj-home'>
        <h1>Bienvenue sur PlantSale</h1>
        <p>Découvrez notre sélection de plantes et accessoires pour votre jardin.</p>
        <p>Parcourez nos catégories pour trouver ce qui vous convient le mieux.</p>
      </div>
    );
  }
}

export default Home;