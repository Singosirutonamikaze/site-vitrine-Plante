import '../css/PlantMList.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function PlantDescriptionAlert({ plant, setSelectedPlant, onAddToCart }) {
    const closeAlert = () => {
        setSelectedPlant(null);
    }
    
    return (
        <>
            <button
                type='button'
                className='modal-backdrop'
                onClick={closeAlert}
                aria-label='Fermer la fenêtre'
            ></button>
            <div className='plant-description-container'>
                <button className='close-button' onClick={closeAlert}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
                <div className='modal-inner'>
                    <img src={plant.image} alt={plant.name} />
                    <h2>{plant.name}</h2>
                    <p>{plant.description}</p>
                    <p className='plant-price'>{plant.price} frcfa</p>
                    <button
                        className='add-to-cart-button'
                        onClick={() => { onAddToCart(plant.name, plant.price); closeAlert(); }}
                    >
                        <ion-icon name="cart-outline"></ion-icon>
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </>
    );
}

function PlantMList({ plants, cart, updateCart }) {
    const [selectedPlant, setSelectedPlant] = useState(null);

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
        <div className='lmj-plant-list_'>
            {plants.map((plant) => (
                <div key={plant.name} className='lmj-plant-item_'>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p className='plant-price'>{plant.price} frcfa</p>
                    <button onClick={() => setSelectedPlant(plant)} className='view-details-button'>Voir Détails</button>
                    <button onClick={() => addToCart(plant.name, plant.price)} className='add-to-cart-button'>Ajouter au panier</button>
                </div>
            ))}
            {selectedPlant && (
                <PlantDescriptionAlert
                    plant={selectedPlant}
                    setSelectedPlant={setSelectedPlant}
                    onAddToCart={addToCart}
                />
            )}
        </div>
    );
}

PlantDescriptionAlert.propTypes = {
    plant: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
    setSelectedPlant: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

PlantMList.propTypes = {
    plants: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
    })).isRequired,
    cart: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
};

export default PlantMList;
