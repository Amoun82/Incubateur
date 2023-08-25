import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { URL_COMMERCIAL_CATEGORIES } from '../../shared/constants/urls/urlConstants';
import {
    addCommercialCategory,
    getCommercialShortCategories,
} from './../../api/backend/category';
import { defaultValuesCategory } from './../../shared/constants/formik-yup/default-values-form/defaultValuesCategory';
import CommercialCategoryForm from './CommercialCategoryForm';

const CommercialCategoryAdd = () => {
    const [errorLog, setErrorLog] = useState(false);
    const [listCat, setListCat] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getCommercialShortCategories().then((response) => {
            setListCat(response.data);
        });
    }, []);

    const handleSubmit = (values) => {
        addCommercialCategory(values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success('La catégorie a été ajoutée', {
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
            {listCat.length > 0 && (
                <CommercialCategoryForm
                    errorLog={errorLog}
                    handleSubmit={handleSubmit}
                    list={listCat}
                    initialValues={defaultValuesCategory}
                    labelSubmit="Ajouter"
                />
            )}
        </div>
    );
};

export default CommercialCategoryAdd;
