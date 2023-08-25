import React from 'react';

import CommercialCategoryAdd from './../../components/commercial/CommercialCategoryAdd';

const CommercialAddCategoryView = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-600 items-center mt-2">
            <div className="max-w-xl flex flex-col items-center w-full">
                <div className=" text-lg rounded-md bg-white text-PrimaryWaya-light grow-0 p-1">
                    Nouvelle Catégorie
                </div>
                <div className="w-full bg-white rounded-md mt-2">
                    <CommercialCategoryAdd />
                </div>
            </div>
        </div>
    );
};

export default CommercialAddCategoryView;
