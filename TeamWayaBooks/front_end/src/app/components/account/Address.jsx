import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    URL_ADDRESS_DEL,
    URL_ADDRESS_UPDATE,
} from './../../shared/constants/urls/urlConstants';

const Address = (props) => {
    const history = useHistory();

    const updateAddress = () => {
        history.push(URL_ADDRESS_UPDATE + '?id=' + props.data.id);
    };
    const deleteAddress = () => {
        history.push(URL_ADDRESS_DEL + '?id=' + props.data.id);
    };
    return (
        <div className="rounded-md w-full h-40 md:w-5/12 border border-black-waya hover:border-PrimaryWaya-light shadow md:mx-6 p-2 my-2 relative font-bold">
            <div>{props.data.address}</div>
            <div>{props.data.complement}</div>
            <div>{props.data.zip_code}</div>
            <div>{props.data.city}</div>
            <div>{props.data.country}</div>
            <button
                className="btn text-white bg-PrimaryWaya-light hover:bg-PrimaryWaya mx-5 rounded-md absolute top-5 right-0"
                onClick={updateAddress}
            >
                Modifier
            </button>
            <button
                className="btn text-white bg-PrimaryWaya-light hover:bg-PrimaryWaya mx-5 rounded-md absolute bottom-5 right-0"
                onClick={deleteAddress}
            >
                Supprimer
            </button>
        </div>
    );
};

export default Address;
