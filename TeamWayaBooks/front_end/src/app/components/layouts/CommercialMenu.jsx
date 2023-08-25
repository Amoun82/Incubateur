import React from 'react';
import { Link } from 'react-router-dom';

import {
    URL_COMMERCIAL_CATEGORIES,
    URL_COMMERCIAL_HOME,
    URL_COMMERCIAL_MESSAGES,
    URL_COMMERCIAL_PRODUCTS,
    URL_COMMERCIAL_TAGS,
    URL_COMMERCIAL_USERS,
} from './../../shared/constants/urls/urlConstants';

const CommercialMenu = () => {
    return (
        <div className="w-full h-full flex flex-col pt-4  bg-white text-PrimaryWaya-light font-bold box-content">
            <Link to={URL_COMMERCIAL_HOME} className="my-1 ml-4">
                Accueil
            </Link>
            <Link to={URL_COMMERCIAL_USERS} className="my-1 ml-4">
                Utilisateurs
            </Link>
            <Link to={URL_COMMERCIAL_PRODUCTS} className="my-1 ml-4">
                Produits
            </Link>
            <Link to={URL_COMMERCIAL_CATEGORIES} className="my-1 ml-4">
                Catégories
            </Link>
            <Link to={URL_COMMERCIAL_TAGS} className="my-1 ml-4">
                Tags
            </Link>
            <Link to={URL_COMMERCIAL_MESSAGES} className="my-1 ml-4">
                Messages
            </Link>
            <div className="my-1 ml-4">Auteurs</div>
            <div className="my-1 ml-4">Editeurs</div>
            <div className="my-1 ml-4">Séries</div>
            <div className="my-1 ml-4">Taxes</div>
            <div className="my-1 ml-4">Addresses</div>
            <div className="my-1 ml-4">Commentaires</div>
            <div className="my-1 ml-4">Commandes</div>
        </div>
    );
};

export default CommercialMenu;
