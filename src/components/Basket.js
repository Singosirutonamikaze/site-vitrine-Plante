
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Basket.css';
import Cart from './Cart';


class Basket extends Component {
  render() {
    const { cart, updateCart } = this.props;
    return (
      <div className='lmj-basket'>
        <h1>
          <ion-icon name="cart-outline"></ion-icon>
          Votre Panier
        </h1>
        {cart.length > 0 ? (
          <Cart cart={cart} updateCart={updateCart} />
        ) : (
          <div className='lmj-basket-empty'>
            <ion-icon name="cart-outline"></ion-icon>
            <h2>Votre panier est vide</h2>
            <p>Vous n'avez encore rien ajouté. Parcourez nos plantes et trouvez votre bonheur !</p>
            <Link to='/lists' className='lmj-basket-empty-cta'>
              <ion-icon name="leaf-outline"></ion-icon>
              Découvrir le catalogue
            </Link>
          </div>
        )}
      </div>
    )
  }
}

Basket.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default Basket;
