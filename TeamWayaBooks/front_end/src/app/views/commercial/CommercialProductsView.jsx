import React from 'react';

import CommercialProducts from './../../components/commercial/CommercialProducts';

const CommercialProductsView = () => {
    return (
        <section className="w-full flex h-full bg-gray-600 ">
            <div className="w-full">
                <CommercialProducts />
            </div>
        </section>
    );
};

export default CommercialProductsView;
