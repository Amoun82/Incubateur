import React from 'react';

import CommercialProduct from './../../components/commercial/CommercialProduct';

const CommercialProductView = () => {
    return (
        <div className="w-full h-full flex bg-gray-600">
            <div className="w-full">
                <CommercialProduct />
            </div>
        </div>
    );
};

export default CommercialProductView;
