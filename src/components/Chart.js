
import React, { Component } from 'react'
import '../css/Chart.css';
import PlantMList from './PlantMList';
import {PlantesMedicinales} from '../data/PlantDatas';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: PlantesMedicinales
    }
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="medicinal-plants-chart">
        <PlantMList plants={cart} addToCart={this.updateCart} />
      </div>
    )
  }
}

export default Chart;
