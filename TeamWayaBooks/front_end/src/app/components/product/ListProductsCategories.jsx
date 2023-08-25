import React, { useEffect, useState } from 'react';

import { listProductsByCategory } from '../../api/backend/product';
import ListProducts from './ListProducts';

function ListProductsCategories(props) {
    const [data, setData] = useState('');
    const fetchProducts = async () => {
        const res = await listProductsByCategory(props.category);
        setData(res.data);
    };
    useEffect(() => {
        if (props.category != '') {
            fetchProducts();
        }
    }, []);
    return (
        <div className="bg-white">
            <ListProducts
                title={`Produits de la catégorie\n${props.name}`}
                products={data}
            />
        </div>
    );
}

export default ListProductsCategories;
