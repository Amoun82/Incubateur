import React from 'react';
import { Link } from 'react-router-dom';

import CommercialCategories from './../../components/commercial/CommercialCategories';
import { URL_COMMERCIAL_CATEGORY_ADD } from './../../shared/constants/urls/urlConstants';

const CommercialCategoriesView = () => {
    return (
        <div className="w-full flex flex-col bg-gray-600 items-center mt-2">
            <div className="w-min text-lg rounded-md bg-white text-PrimaryWaya-light grow-0 p-1">
                Catégories
            </div>
            <div className="rounded-md flex justify-between grow-0 shrink-0 mt-2">
                <Link to={URL_COMMERCIAL_CATEGORY_ADD}>
                    <button className="btn btn-waya">Ajouter</button>
                </Link>
            </div>
            <div className="w-full">
                <CommercialCategories />
            </div>
        </div>
    );
};

export default CommercialCategoriesView;
