import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchProduct } from '../../api/backend/product';
import ListProducts from './ListProducts';

function ListSearch() {
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [data, setData] = useState('');
    const fetchProducts = async () => {
        const res = await SearchProduct(search);
        setData(res.data);
    };
    useEffect(() => {
        setSearch(new URLSearchParams(history.location.search).get('search'));
        if (search != '') {
            fetchProducts();
        }
    }, [search]);
    return (
        <div>
            <ListProducts title="Résultat de votre recherche" products={data} />
        </div>
    );
}

export default ListSearch;
