import CareScale from './CareScale'
import '../css/PlantItem.css'
import PropTypes from 'prop-types';

function PlantItem({ cover, name, water, light, price }) {
    return (
        <li className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price} frcfa</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <div className='lmj-plant-card-body'>
                <span className='lmj-plant-name'>{name}</span>
                <div className='lmj-plant-care'>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </div>
        </li>
    )
}

PlantItem.propTypes = {
    cover: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    water: PropTypes.number.isRequired,
    light: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default PlantItem;