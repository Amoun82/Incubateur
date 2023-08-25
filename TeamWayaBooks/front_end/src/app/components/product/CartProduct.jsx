import React from 'react';

import Stars from '../../shared/components/utils-components/stars/Stars';
const CartProduct = (props) => {
    return (
        <div className="w-full flex flex-row justify-center items-center">
            <div className="w-1/2">
                <img
                    src={props.product.product_image}
                    alt="product"
                    className="justify-center items-center"
                />
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="font-bold">{props.product.product_name}</div>
                <div className="hidden md:block">
                    {props.product.authors.map((value) => {
                        return (
                            <div key={'p' + value.id}>
                                de{' '}
                                <span className="font-bold">
                                    {value.author_firstname} {value.author_lastname}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className="hidden md:block">
                    <Stars value={props.product.note} size={15} isHalf={true} />
                </div>
                <div className="hidden md:block">
                    {props.product.comments}{' '}
                    {props.product.comments > 1 ? 'évaluations' : 'évaluation'}
                </div>
                <div className="md:hidden">{props.product.price}</div>
            </div>
        </div>
    );
};

export default CartProduct;
