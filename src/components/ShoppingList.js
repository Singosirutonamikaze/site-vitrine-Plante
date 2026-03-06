import '../css/Lists.css';
import { useState } from 'react'
import PropTypes from 'prop-types';
import { plantList } from '../data/PlantLists'
import PlantItem from './PlantItem'
import Categories from './Categories'


function ShoppingList({ cart, updateCart, showToast }) {
	const [activeCategory, setActiveCategory] = useState('')
	const [search, setSearch] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
		showToast(name)
	}

	const filteredList = plantList.filter(({ name, category }) => {
		const matchCategory = !activeCategory || activeCategory === category
		const matchSearch = name.toLowerCase().includes(search.toLowerCase())
		return matchCategory && matchSearch
	})

	return (
		<div className='lmj-shopping-list'>
			<div className='lmj-list-header'>
				<h1 className='lmj-list-title'>
					<ion-icon name="leaf-outline"></ion-icon>
					Catalogue
				</h1>
				<div className='lmj-search-bar'>
					<ion-icon name="search-outline"></ion-icon>
					<input
						type='text'
						placeholder='Rechercher une plante…'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					{search && (
						<button className='lmj-search-clear' onClick={() => setSearch('')}>
							<ion-icon name="close-outline"></ion-icon>
						</button>
					)}
				</div>
			</div>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			{filteredList.length === 0 ? (
				<div className='lmj-empty-state'>
					<ion-icon name="search-outline"></ion-icon>
					<p>Aucune plante trouvée pour « {search} »</p>
				</div>
			) : (
				<ul className='lmj-plant-list'>
					{filteredList.map(({ id, cover, name, water, light, price }) => (
						<div key={id} className='lmj-plant-item'>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>
								<ion-icon name="cart-outline"></ion-icon>
								Ajouter
							</button>
						</div>
					))}
				</ul>
			)}
		</div>
	)
}

ShoppingList.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.number,
		amount: PropTypes.number,
	})).isRequired,
	updateCart: PropTypes.func.isRequired,
	showToast: PropTypes.func.isRequired,
};

export default ShoppingList;
