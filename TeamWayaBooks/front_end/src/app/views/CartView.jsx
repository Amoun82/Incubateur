import React from 'react';

import Cart from './../components/product/Cart';

const CartView = () => {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-100">
            <h3 className="text-PrimaryWaya font-bold my-2 sm:my-10">Votre panier</h3>
            <Cart />
        </div>
    );
};

export default CartView;
