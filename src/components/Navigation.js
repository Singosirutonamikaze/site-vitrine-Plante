import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navigation.css';

const list = [
    { id: 1, name: 'Accueil', link: '/' },
    { id: 2, name: 'Liste des achats', link: '/lists' },
    { id: 3, name: 'Plante vertes', link: '/produits' },
    { id: 4, name: 'Panier', link: '/panier' },
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
        
        const handle = () => {
            this.setState({ click: !click });
        };


        return (
            <header>
                <div className="container">
                    <nav className="navigation">
                        <Link to="/">
                            <div className="logo_container">
                                <img src={logo}  alt="Logo" className="logo"/>
                                <span>PlantSale</span>
                            </div>
                        </Link>
                        <div className="mobile_menu_icon" onClick={handle}>
                            <ion-icon
                                name={click ? 'close-outline' : 'menu-outline'}
                            ></ion-icon>
                        </div>
                        <ul className={click ? 'nav-links active' : 'nav-links'}>
                            {list.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.link}
                                        className={({ isActive }) =>
                                            isActive ? 'active' : ''
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navigation;