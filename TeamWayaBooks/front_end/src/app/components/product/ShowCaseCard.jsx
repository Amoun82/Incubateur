import React from 'react';
import { Link } from 'react-router-dom';

import { URL_PRODUCT_DETAIL } from './../../shared/constants/urls/urlConstants';

function ShowCaseCard(data) {
    return (
        <Link
            key={data.product.id}
            className="flex flex-col bg-white border-2 border-PrimaryWaya-light w-72 h-96 p-0.5 rounded-md shadow-lg shadow-PrimaryWaya-light"
            // className="flex flex-col bg-white my-2 sm:m-2 border-2 border-PrimaryWaya-light w-full sm:w-1/5 lg:w-1/6 p-0.5"
            to={`${URL_PRODUCT_DETAIL}?id=${data.product.id}`}
        >
            <div className="flex justify-center w-full h-72">
                <img
                    className=" object-contain rounded-md"
                    src={data.product.product_image}
                    alt="couverture de livre"
                />
            </div>
            <div className="flex flex-col justify-between h-24 text-center overflow-auto">
                <h6 className="text-md text-PrimaryWaya mb-1">
                    <span className="font-bold">{data.product.product_name}</span>
                </h6>
                <span className="text-md">prix : {data.product.price}€</span>
            </div>
        </Link>
    );
}

export default ShowCaseCard;
