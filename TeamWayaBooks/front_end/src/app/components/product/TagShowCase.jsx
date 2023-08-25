import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { listProductsByTag } from '../../api/backend/product';
import { URL_PRODUCT_LIST_TAG } from './../../shared/constants/urls/urlConstants';
import ShowCaseCard from './ShowCaseCard';

const TagShowCase = (props) => {
    const [product, setProduct] = useState('');
    const fetchProducts = async () => {
        const res = await listProductsByTag(props.tag, props.page, props.limit);
        setProduct(res.data);
    };
    useEffect(() => {
        if (props.tag != '') fetchProducts();
    }, []);
    return (
        <div className="bg-white my-4">
            <Link
                className="flex justify-end"
                to={`${URL_PRODUCT_LIST_TAG}?tag=${props.tag}`}
            >
                <div className="text-red-500 font-Montserrat mx-4 hover:bg-PrimaryWaya-light hover:rounded-lg hover:text-white">
                    Tous les Nouveaux produits
                </div>
            </Link>
            <section className="flex flex-col sm:flex-row justify-center items-center w-full  max-w-screen flex-nowrap sm:flex-wrap gap-4">
                {/* <section className="flex flex-col sm:flex-row justify-center sm:justify-start mx-10 sm:mx-0 sm:ml-10 w-5/6 sm:w-full flex-nowrap sm:flex-wrap"> */}
                {product != '' &&
                    product.map((item) => <ShowCaseCard key={item.id} product={item} />)}
            </section>
        </div>
    );
};

export default TagShowCase;
