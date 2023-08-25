import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { URL_COMMERCIAL_TAGS } from '../../shared/constants/urls/urlConstants';
import { addCommercialTag } from './../../api/backend/tag';
import { defaultValuesTag } from './../../shared/constants/formik-yup/default-values-form/defaultValuesTag';
import CommercialTagForm from './CommercialTagForm';

const CommercialTagAdd = () => {
    const [errorLog, setErrorLog] = useState(false);
    const history = useHistory();

    const handleSubmit = (values) => {
        addCommercialTag(values)
            .then((response) => {
                if (response.status === 201) {
                    toast.success(`Le Tag "${response.data.tag_name}" a été ajouté.`, {
                        position: 'top-center',
                        autoClose: 3000,
                    });
                    history.push(URL_COMMERCIAL_TAGS);
                }
            })
            .catch((error) => {
                console.log(error.message);
                setErrorLog(true);
            });
    };
    return (
        <div>
            <CommercialTagForm
                errorLog={errorLog}
                handleSubmit={handleSubmit}
                initialValues={defaultValuesTag}
                labelSubmit="Ajouter"
            />
        </div>
    );
};

export default CommercialTagAdd;
