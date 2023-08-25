import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { URL_COMMERCIAL_CATEGORIES } from '../../shared/constants/urls/urlConstants';
import {
    getCommercialCategory,
    getCommercialShortCategories,
    updateCommercialCategory,
} from './../../api/backend/category';
import CommercialCategoryForm from './CommercialCategoryForm';

const CommercialCategoryUpdate = () => {
    const [errorLog, setErrorLog] = useState(false);
    const [listCat, setListCat] = useState([]);
    const history = useHistory();
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

    const handleSubmit = (values) => {
        updateCommercialCategory(id, values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('La catégorie a été modifiée', {
                        position: 'top-center',
                        autoClose: 3000,
                    });
                    history.push(URL_COMMERCIAL_CATEGORIES);
                }
            })
            .catch((error) => {
                console.log(error.message);
                setErrorLog(true);
            });
    };
    return (
        <div>
            {listCat.length > 0 && category !== '' && (
                <CommercialCategoryForm
                    errorLog={errorLog}
                    handleSubmit={handleSubmit}
                    list={listCat}
                    initialValues={category}
                    labelSubmit="Modification"
                />
            )}
        </div>
    );
};

export default CommercialCategoryUpdate;
