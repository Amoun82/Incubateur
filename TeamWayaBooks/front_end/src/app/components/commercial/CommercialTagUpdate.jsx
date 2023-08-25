import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { URL_COMMERCIAL_TAGS } from '../../shared/constants/urls/urlConstants';
import { getCommercialTag, updateCommercialTag } from './../../api/backend/tag';
import CommercialTagForm from './CommercialTagForm';

const CommercialTagUpdate = () => {
    const [errorLog, setErrorLog] = useState(false);
    const [id, setId] = useState('');
    const [tag, setTag] = useState('');
    const history = useHistory();

    useEffect(() => {
        setId(new URLSearchParams(history.location.search).get('id'));
        if (id !== '') {
            getCommercialTag(id).then((response) => {
                if (response.status === 200) {
                    setTag({
                        name: response.data.tag_name,
                    });
                }
            });
        }
    }, [id]);

    const handleSubmit = (values) => {
        updateCommercialTag(id, values)
            .then((response) => {
                if (response.status === 200) {
                    toast.success(`Le Tag a été modifié.`, {
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
            {tag !== '' && (
                <CommercialTagForm
                    errorLog={errorLog}
                    handleSubmit={handleSubmit}
                    initialValues={tag}
                    labelSubmit="Modifier"
                />
            )}
        </div>
    );
};

export default CommercialTagUpdate;
