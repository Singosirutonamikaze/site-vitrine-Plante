import { Component } from 'react'
import PropTypes from 'prop-types';
import ShoppingList from './ShoppingList'


class Lists extends Component {
    render() {
        const { cart, updateCart, showToast } = this.props;
        return (
            <div>
                <ShoppingList cart={cart} updateCart={updateCart} showToast={showToast} />
            </div>
        )
    }
}

Lists.propTypes = {
    cart: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
    showToast: PropTypes.func.isRequired,
};

export default Lists;