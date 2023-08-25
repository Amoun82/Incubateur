import React, { useEffect, useState } from 'react';

import { listProductsByCategory } from '../../api/backend/product';
import { listProductsByTag } from '../../api/backend/product';
import { nameByTag } from '../../api/backend/tag';
import ProductCard from './ProductCard';

const ListProductParam = (props) => {
    const [data, setData] = useState('');
    const [title, setTitle] = useState('');
    const fetchProducts = async () => {
        if (props.options == 'tag') {
            const res = await listProductsByTag(props.tag);
            setData(res.data);
            const resTag = await nameByTag(props.tag);
            setTitle(resTag.data.tagName);
        }
        if (props.options == 'cat') {
            const res = await listProductsByCategory(props.category);
            setData(res.data);
            const resCategory = await nameByCategory(props.category);
            setTitle(resCategory.data.tagName);
        }
    };
    const fetchTagName = async () => {};
    useEffect(() => {
        fetchProducts();
        fetchTagName();
    }, []);
    return (
        <div className="flex flex-col font-Montserrat items-center bg-bgWaya">
            {data !== '' ? (
                <div>
                    <h1 className="mt-12 mb-24 md:mb-12 text-PrimaryWaya break-words text-center">
                        {title}
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
};

export default ListProductParam;
