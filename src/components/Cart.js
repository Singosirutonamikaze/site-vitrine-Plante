import { useState, useEffect } from 'react'
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
						{cart.map(({ name, price, amount}, index) => (
							<div key={`${name}-${index}`} className='lmj-cart-item_'>
								<span className='lmj-cart-item-name'>{name}</span>
								<span className='lmj-cart-item-price'>{price} frcfa</span>
								<span className='lmj-cart-item-amount'>x {amount}</span>
								<span className='lmj-cart-item-total'>{price * amount} frcfa</span>
								<span className='lmj-cart-item-remove'>
									<button
										onClick={() => {
											const newCart = cart.filter(
												(_, i) => i !== index
											)
											updateCart(newCart)
										}}
									>
										&times;
									</button>
								</span>
							</div>
						))}
					</ul>
					<h3 className='lmj-cart-total'>Total :{total} frcfa</h3>
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

export default Cart