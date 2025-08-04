import '../css/PlantMList.css';
import { useState } from 'react';

function PlantDescriptionAlert({ plant, setSelectedPlant }) {
    const closeAlert = () => {
        setSelectedPlant(null);
    }
    
    return (
        <div className='plant-description-container'>
            <button className='close-button' onClick={closeAlert}>X</button>
            <div className='lmj-plant-description'>
                <h2>{plant.name}</h2>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.description}</p>
            </div>
        </div>
    );
}

function PlantMList({ plants }) {
    const [selectedPlant, setSelectedPlant] = useState(null);

    return (
        <div className='lmj-plant-list_'>
            {plants.map((plant) => (
                <div key={plant.name} className='lmj-plant-item_'>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <button onClick={() => setSelectedPlant(plant)} className='view-details-button'>Voir Détails</button>
                </div>
            ))}
            {selectedPlant && (
                <PlantDescriptionAlert plant={selectedPlant} setSelectedPlant={setSelectedPlant} />
            )}
        </div>
    );
}

export default PlantMList;
