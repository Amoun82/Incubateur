import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import DetailProduct from './../../components/product/DetailProduct';

const DetailProductView = () => {
    const history = useHistory();
    const [id, setId] = useState('');
    useEffect(() => {
        setId(new URLSearchParams(history.location.search).get('id'));
    }, [id]);
    return (
        <div className="bg-white">
            <div>
                <button className="btn btn-waya" onClick={history.goBack}>
                    Retour
                </button>
            </div>
            {id != '' && id != null ? <DetailProduct id={id} /> : null}
        </div>
    );
};

export default DetailProductView;
