import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ListProductsCategories from '../../components/product/ListProductsCategories';

function ListProductsCategoriesView() {
    const history = useHistory();
    const [categoryName, setCategoryName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    useEffect(() => {
        setCategoryName(new URLSearchParams(history.location.search).get('name'));
        setCategoryId(new URLSearchParams(history.location.search).get('id'));
    }, []);
    return (
        <div>
            {categoryId != '' && categoryName != '' ? (
                <ListProductsCategories name={categoryName} category={categoryId} />
            ) : (
                'pas de livres dans cette catégorie'
            )}
        </div>
    );
}

export default ListProductsCategoriesView;
