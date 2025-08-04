import { Component } from 'react'
import ShoppingList from './ShoppingList'


class Lists extends Component {
    constructor(props) {
        super(props)
        const savedCart = localStorage.getItem('cart')
        this.state = {
            cart: savedCart ? JSON.parse(savedCart) : []
        }
    }

    render() {
        const { cart } = this.state
        const updateCart = (newCart) => {
            this.setState({ cart: newCart })
            localStorage.setItem('cart', JSON.stringify(newCart))
        }
        return (
            <div>
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        )
    }
}

export default Lists;