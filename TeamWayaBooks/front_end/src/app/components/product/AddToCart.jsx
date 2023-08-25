import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCart } from '../../shared/redux-store/cartSlice';

const AddToCart = (props) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        id: 0,
        product_name: '',
        published: '',
        note: 0,
        comments: 0,
        price: 0,
        quantity: 0,
        authors: [],
        product_image: '',
    });

    const addToCart = () => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        setProduct(props.data);
    }, [product]);

    return (
        <button className="btn btn-waya" onClick={addToCart}>
            Ajouter au panier
        </button>
    );
};

export default AddToCart;
