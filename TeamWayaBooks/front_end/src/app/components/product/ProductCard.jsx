import React from 'react';
import { Link } from 'react-router-dom';

import { URL_PRODUCT_DETAIL } from './../../shared/constants/urls/urlConstants';

function Author(values) {
    return (
        <div className="font-bold">
            {values.data.author_lastname} {values.data.author_firstname}
        </div>
    );
}

function ProductCard(data) {
    return (
        <Link
            key={data.product.id}
            className="flex flex-col bg-white my-2 sm:m-2 border-2 rounded-md shadow-lg shadow-PrimaryWaya-light hover:shadow-red-400 border-PrimaryWaya-light w-72 h-96 p-0.5 hover:border-red-500"
            to={`${URL_PRODUCT_DETAIL}?id=${data.product.id}`}
        >
            <div className="flex justify-center h-4/6 w-full rounded-md">
                <img
                    className="object-contain rounded-md"
                    src={data.product.product_image}
                    alt="couverture de livre"
                />
            </div>
            <div className="flex flex-col h-2/6 text-center overflow-auto">
                <h6 className="text-md text-PrimaryWaya my-1">
                    titre :{' '}
                    <span className="text-md font-bold">{data.product.product_name}</span>
                </h6>
                <p className="text-md my-1 md:mb-1">prix : {data.product.price}€</p>
                <div className="text-sm md:text-xs my-1 md:mb-1">
                    auteur :
                    {data.product.author.map((value) => {
                        return <Author key={value.id} data={value} />;
                    })}
                </div>
                <p className="text-sm md:text-xs my-1 md:mb-1">
                    description : {data.product.description}
                </p>
            </div>
        </Link>
    );
}

export default ProductCard;
