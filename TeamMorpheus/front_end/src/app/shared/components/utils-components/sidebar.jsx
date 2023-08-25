import React from 'react';
import { slide as MenuBurger } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { isAdmin, isAuthenticated } from '../../services/accountServices';
import { URL_ADD_PRODUCT, URL_ALL_PRODUCT } from '../../constants/urls/urlConstants';

import CloseImage from '../../../assets/images/croix.png';

// eslint-disable-next-line react/display-name
export default (props) => {
    return (
        // Pass on our props
        // eslint-disable-next-line jsx-a11y/alt-text
        <MenuBurger customCrossIcon={<img src={CloseImage} />} {...props}>
            {isAuthenticated() && isAdmin() && (
                <Link to={URL_ADD_PRODUCT}>
                    <div className="menu-item">Add product for Admin</div>
                </Link>
            )}
            {isAuthenticated() && isAdmin() && (
                <Link to={URL_ALL_PRODUCT}>
                    <div className="menu-item">all product for Admin</div>
                </Link>
            )}
            <a className="menu-item" href="/collection">
                Collection
            </a>
            <a className="menu-item" href="/femme">
                Femme
            </a>
            <a className="menu-item" href="/homme">
                Homme
            </a>
            <a className="menu-item" href="/enfant">
                Enfant
            </a>
            <a className="menu-item" href="/bebe">
                Bébé
            </a>
            <a className="menu-item" href="/accessoires">
                Accessoires
            </a>
            <a className="menu-item" href="/carteCadeau">
                Carte Cadeau
            </a>
            <a className="menu-item" href="/aPropos">
                A propos
            </a>
            <a className="menu-item" href="/contact">
                Contact
            </a>
            <a className="menu-item" href="/retour">
                Retour
            </a>
            <a className="menu-item" href="/besoinDAide">
                Besoin d'aide ?
            </a>
        </MenuBurger>
    );
};
