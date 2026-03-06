
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/Chart.css';
import PlantMList from './PlantMList';
import {PlantesMedicinales} from '../data/PlantDatas';


class Chart extends Component {
  render() {
    const { cart, updateCart } = this.props;
    return (
      <div className="medicinal-plants-chart">
        <div className="lmj-chart-header">
          <div className="lmj-chart-icon-wrap">
            <ion-icon name="leaf-outline"></ion-icon>
          </div>
          <div>
            <h1>Plantes médicinales</h1>
            <p>Découvrez notre collection de plantes aux vertus naturelles</p>
          </div>
        </div>
        <PlantMList plants={PlantesMedicinales} cart={cart} updateCart={updateCart} />
      </div>
    )
  }
}

Chart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default Chart;
