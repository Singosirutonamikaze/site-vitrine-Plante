import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import '../css/Navigation.css';

const list = [
    { id: 1, name: 'Accueil', link: '/', icon: 'home-outline' },
    { id: 2, name: 'Achats', link: '/lists', icon: 'list-outline' },
    { id: 3, name: 'Plantes', link: '/produits', icon: 'leaf-outline' },
    { id: 4, name: 'Panier', link: '/panier', icon: 'cart-outline' },
];

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
        };
    }

    render() {
        const { click } = this.state;
        const { cartCount } = this.props;
        
        const handle = () => {
            this.setState({ click: !click });
        };


        return (
            <aside className="sidebar">
                <Link to="/" className="sidebar-logo">
                    <img src={logo} alt="Logo" className="sidebar-logo-img" />
                    <span className="sidebar-logo-text">PlantSale</span>
                </Link>
                <button className="mobile_menu_icon" onClick={handle} type="button" aria-label="Toggle menu">
                    <ion-icon name={click ? 'close-outline' : 'menu-outline'}></ion-icon>
                </button>
                <ul className={click ? 'sidebar-nav active' : 'sidebar-nav'}>
                    {list.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.link}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                <ion-icon name={item.icon} className="sidebar-nav-icon"></ion-icon>
                                <span>{item.name}</span>
                                {item.link === '/panier' && cartCount > 0 && (
                                    <span className="cart-badge">{cartCount}</span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    }
}

Navigation.propTypes = {
    cartCount: PropTypes.number.isRequired,
};

export default Navigation;