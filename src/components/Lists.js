import { Component } from 'react'
import PropTypes from 'prop-types';
import ShoppingList from './ShoppingList'


class Lists extends Component {
    render() {
        const { cart, updateCart } = this.props;
        return (
            <div>
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        )
    }
}

Lists.propTypes = {
    cart: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
};

export default Lists;