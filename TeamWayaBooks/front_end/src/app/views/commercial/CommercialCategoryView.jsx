import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { URL_COMMERCIAL_CATEGORY_UPDATE } from '../../shared/constants/urls/urlConstants';
import {
    getCommercialCategory,
    getCommercialShortCategories,
} from './../../api/backend/category';
import CommercialCategoryForm from './../../components/commercial/CommercialCategoryForm';

const CommercialCategoryView = () => {
    const history = useHistory();
    const [errorLog] = useState(false);
    const [listCat, setListCat] = useState([]);
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        getCommercialShortCategories().then((response) => {
            setListCat(response.data);
        });
    }, []);

    useEffect(() => {
        setId(new URLSearchParams(history.location.search).get('id'));
        if (id !== '') {
            getCommercialCategory(id).then((response) => {
                setCategory({
                    name: response.data.category_name,
                    description: response.data.description,
                    parent: response.data.parent !== null ? response.data.parent.id : 0,
                });
            });
        }
    }, [id]);

    const handleEdit = () => {
        history.push(`${URL_COMMERCIAL_CATEGORY_UPDATE}?id=` + id);
    };

    return (
        <div className="w-full h-full flex flex-col bg-gray-600 items-center mt-2">
            <div className="max-w-xl flex flex-col items-center w-full">
                <div className="w-min text-lg rounded-md bg-white text-PrimaryWaya-light grow-0 p-1">
                    Catégorie
                </div>
                <div className="w-full bg-white rounded-md mt-2">
                    {listCat.length > 0 && category !== '' && (
                        <CommercialCategoryForm
                            errorLog={errorLog}
                            handleSubmit={handleEdit}
                            list={listCat}
                            initialValues={category}
                            labelSubmit="Modifier"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommercialCategoryView;
