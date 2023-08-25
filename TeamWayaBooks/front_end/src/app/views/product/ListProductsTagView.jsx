import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ListProductsTag from '../../components/product/ListProductsTag';

function ListProductsTagView() {
    const history = useHistory();
    const [categoryName, setCategoryName] = useState('');
    useEffect(() => {
        setCategoryName(new URLSearchParams(history.location.search).get('tag'));
    }, []);
    return (
        <div>
            {categoryName != '' ? (
                <ListProductsTag tag={categoryName} />
            ) : (
                'pas de livres'
            )}
        </div>
    );
}

export default ListProductsTagView;
