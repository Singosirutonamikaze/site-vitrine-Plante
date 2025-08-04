import CareScale from './CareScale'
import '../css/PlantItem.css'
import React from 'react';

function handleClick(plantName) {
    React.createElement(
        'div',
        {id: 'PlantItem-message'},
        `Vous voulez acheter 1 ${plantName}? Très bon choix !`
    )
}

function PlantItem({ cover, name, water, light, price }) {
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <span className='lmj-plant-item-price'>{price} frcfa</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem;