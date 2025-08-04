
import React, { Component } from 'react'
import '../css/Basket.css';
import Cart from './Cart';


class Basket extends Component {

  constructor(props) {
    super(props)
    const savedCart = localStorage.getItem('cart')
    this.state = {
      cart: savedCart ? JSON.parse(savedCart) : []
    }
  }

  render() {
    const { cart } = this.state
    const updateCart = (newCart) => {
      this.setState({ cart: newCart })
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
    return (
      <div className='lmj-basket'>
        <h1>Votre Panier</h1>
        {cart.length > 0 ? (
          <Cart cart={cart} updateCart={updateCart} />
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </div>
    )
  }
}

export default Basket;
