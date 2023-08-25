import React, { useEffect, useState } from 'react';

import { listProductsByTag } from '../../api/backend/product';
import { nameByTag } from '../../api/backend/tag';
import ProductCard from './ProductCard';

function ListProductsTag(props) {
    const [data, setData] = useState('');
    const [tagName, setTagName] = useState('');
    const fetchProducts = async () => {
        const res = await listProductsByTag(props.tag);
        setData(res.data);
    };
    const fetchTagName = async () => {
        const res = await nameByTag(props.tag);
        setTagName(res.data.tagName);
    };
    useEffect(() => {
        fetchProducts();
        fetchTagName();
    }, []);
    return (
        <div className="flex flex-col font-Montserrat items-center bg-bgWaya">
            {data !== '' ? (
                <div>
                    <h1 className="mt-12 mb-24 md:mb-12 text-PrimaryWaya break-words text-center">
                        Produits du tag
                        <br />
                        {tagName}
                    </h1>
                    <section className="flex flex-col sm:flex-row justify-center sm:justify-start mx-10 sm:mx-0 sm:ml-10 w-5/6 sm:w-full flex-nowrap sm:flex-wrap">
                        {data.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </section>
                </div>
            ) : null}
        </div>
    );
}

export default ListProductsTag;
