import '../css/PlantMList.css';
import { useState } from 'react';

function PlantDescriptionAlert({ plant }) {
    return (
        <div className='lmj-plant-description'>
            <h2>{plant.name}</h2>
            <img src={plant.image} alt={plant.name} />
            <p>{plant.description}</p>
        </div>
    );
}

function PlantMList({ plants }) {
    const [selectedPlant, setSelectedPlant] = useState(null);

    return (
        <div className='lmj-plant-list'>
            {plants.map((plant) => (
                <div key={plant.name} className='lmj-plant-item'>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <button onClick={() => setSelectedPlant(plant)}>Voir Détails</button>
                </div>
            ))}
            {selectedPlant && (
                <PlantDescriptionAlert plant={selectedPlant} />
            )}
        </div>
    );
}

export default PlantMList;
