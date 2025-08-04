
import React, { Component } from 'react'
import '../css/Chart.css';
import PlantMList from './PlantMList';

class Chart extends Component {
  constructor(props) {
    super(props);
    const savedCart = localStorage.getItem('cart')
    this.state = {
      cart: savedCart ? JSON.parse(savedCart) : []
    }
  }

  updateCart = (newCart) => {
    this.setState({ cart: newCart });
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  render() {
    const { cart } = this.state;

    return (
      <div>
        <h1>Mes plantes Médicinales</h1>
        <p>Voici la liste de vos plantes médicinales :</p>
        <PlantMList plants={cart} addToCart={this.updateCart} />
      </div>
    )
  }
}

export default Chart;
