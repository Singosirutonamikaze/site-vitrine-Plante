import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import '../css/Cart.css';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total} frcfa d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			{cart.length > 0 ? (
				<div className='lmj-cart-content'>
					<ul className='lmj-cart-list'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='lmj-cart-item_'>
								<span className='lmj-cart-item-name'>{name}</span>
								<span className='lmj-cart-item-price'>{price} frcfa</span>
								<div className='lmj-cart-item-qty'>
									<button
										className='lmj-qty-btn'
										onClick={() => {
											if (amount <= 1) {
												updateCart(cart.filter((_, i) => i !== index))
											} else {
												updateCart(cart.map((item, i) =>
													i === index ? { ...item, amount: item.amount - 1 } : item
												))
											}
										}}
									>
										<ion-icon name="remove-outline"></ion-icon>
									</button>
									<span className='lmj-cart-item-amount'>{amount}</span>
									<button
										className='lmj-qty-btn'
										onClick={() => {
											updateCart(cart.map((item, i) =>
												i === index ? { ...item, amount: item.amount + 1 } : item
											))
										}}
									>
										<ion-icon name="add-outline"></ion-icon>
									</button>
								</div>
								<span className='lmj-cart-item-total'>{price * amount} frcfa</span>
								<span className='lmj-cart-item-remove'>
									<button
										onClick={() => {
											updateCart(cart.filter((_, i) => i !== index))
										}}
									>
										<ion-icon name="trash-outline"></ion-icon>
									</button>
								</span>
							</div>
						))}
					</ul>
					<h3 className='lmj-cart-total'>Total : <span className='lmj-cart-total-amount'>{total} frcfa</span></h3>
					<button onClick={() => updateCart([])} className='lmj-cart-empty-button'>Vider le panier</button>
				</div>
			) : (
				<span className='lmj-cart-empty-text'>Votre panier est vide</span>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

Cart.propTypes = {
	cart: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.number,
		amount: PropTypes.number,
	})).isRequired,
	updateCart: PropTypes.func.isRequired,
};

export default Cart