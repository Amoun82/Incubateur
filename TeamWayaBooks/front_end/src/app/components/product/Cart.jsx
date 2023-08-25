import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCart } from '../../shared/redux-store/cartSlice';
import AddToCart from './AddToCart';
import CartLine from './CartLine';

const Cart = () => {
    const history = useHistory();
    const products = useSelector(selectCart);
    const product = {
        id: 4,
        product_name: 'sed sagittis',
        published: '2017-11-01',
        note: 3.5,
        comments: 10,
        price: 9.55,
        quantity: 2,
        authors: [{ author_firstname: 'Odile', author_lastname: 'Deraie', id: 1 }],
        product_image: 'http://dummyimage.com/127x181.png/5fa2dd/ffffff',
    };
    let articles = 0;
    let total = 0;

    return (
        <div className="w-full md:w-4/5 bg-white rounded-md m-2">
            <div className="w-full flex items-center justify-start pb-4 ">
                <div className="font-bold md:w-2/6 hidden md:block">
                    <p className="text-center">Produits</p>
                </div>
                <div className="font-bold md:w-1/6 hidden md:block">
                    <p className="text-center">Prix unitaire</p>
                </div>
                <div className="font-bold md:w-1/6 hidden md:block">
                    <p className="text-center">Quantité</p>
                </div>
                <div className="font-bold md:w-1/6 hidden md:block">
                    <p className="text-center">Total article</p>
                </div>
                <div className="font-bold md:w-1/6 hidden md:block">
                    <p className="text-center">Supprimer</p>
                </div>
            </div>
            {products.map((key, value) => {
                // console.log('key : ' + value);
                articles += key.quantity;
                total = (
                    parseFloat(total) + parseFloat(key.quantity * key.price)
                ).toFixed(2);
                return <CartLine data={key} key={'l' + value} position={value} />;
            })}
            <div className="flex flex-wrap items-center justify-between md:mt-4">
                <div className="md:w-2/6 text-center"></div>
                <div className="text-black-waya font-bold w-1/2 md:w-1/6 text-center">
                    Nombre d&apos;articles:
                </div>
                <div className="text-PrimaryWaya-light font-bold w-1/2 md:w-1/6 text-center">
                    {articles}
                </div>
                <div className="text-black-waya font-bold w-1/2 md:w-1/6 text-center">
                    Total panier:
                </div>
                <div className="text-PrimaryWaya-light font-bold w-1/2 md:w-1/6 text-center">
                    {total}
                </div>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center sm:justify-around mb-2">
                <div>
                    <button className="btn btn-waya mt-2" onClick={history.goBack}>
                        Retour
                    </button>
                </div>
                <div>
                    <button className="btn py-0 btn-waya mt-2">Passer la commande</button>
                </div>
            </div>
            <AddToCart data={product} />
        </div>
    );
};

export default Cart;
