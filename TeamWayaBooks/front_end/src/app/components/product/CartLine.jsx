import React from 'react';
import { useDispatch } from 'react-redux';

import smalltrashbin from '../../assets/images/smalltrashbin.png';
import trashbin from '../../assets/images/trashbin.png';
import {
    decrementProduct,
    incrementProduct,
    removeCart,
} from '../../shared/redux-store/cartSlice';
import CartProduct from './CartProduct';

const CartLine = (props) => {
    const dispatch = useDispatch();

    const incProd = () => {
        dispatch(incrementProduct(parseInt(props.position)));
    };
    const decProd = () => {
        dispatch(decrementProduct(props.position));
    };
    const removeProd = () => {
        dispatch(removeCart(parseInt(props.position)));
    };
    return (
        <div className="w-full flex items-center justify-start md:justify-between py-2 border-b-2 border-PrimaryWaya">
            <div className="w-4/6 md:w-2/6">
                <CartProduct product={props.data} key={props.data.id} />
            </div>
            <div className="w-2/6 md:w-4/6 flex flex-col md:flex-row items-end md:items-center justify-between">
                <div className="hidden md:block md:w-1/4 md:order-1">
                    <div className="text-center">{props.data.price}</div>
                </div>
                <div className="md:w-1/4 order-2 mr-10 md:mr-0">
                    <div className="flex flex-row justify-center items-center">
                        {props.data.quantity <= 1 ? (
                            <button
                                className="rounded-md rounded-r-none h-6 w-4 mr-1"
                                onClick={removeProd}
                            >
                                <img
                                    src={smalltrashbin}
                                    alt="smalltrashbin"
                                    className="h-6 "
                                />
                            </button>
                        ) : (
                            <button
                                className="bg-PrimaryWaya-light text-white rounded-md rounded-r-none h-6 w-4 mr-1"
                                onClick={decProd}
                            >
                                -
                            </button>
                        )}
                        {props.data.quantity}
                        <button
                            className="bg-PrimaryWaya-light text-white rounded-md rounded-l-none h-6 w-4 ml-1"
                            onClick={incProd}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="md:w-1/4 hidden md:block md:order-3">
                    <div className="text-center">
                        {(props.data.price * props.data.quantity).toFixed(2)}
                    </div>
                </div>
                <div className="md:w-1/4 flex justify-center items-center order-1 md:order-4 mb-10 md:mb-0 mr-10 md:mr-0">
                    <div className="h-full">
                        <button onClick={removeProd} className="h-6">
                            <img
                                src={trashbin}
                                alt="trashbin"
                                className="w-4 cursor-pointer"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartLine;
