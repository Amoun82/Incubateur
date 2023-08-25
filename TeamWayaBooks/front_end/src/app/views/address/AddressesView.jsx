import React from 'react';
import { Link } from 'react-router-dom';

import Addresses from '../../components/account/Addresses';
import { URL_ADDRESS_ADD } from '../../shared/constants/urls/urlConstants';
import addresses from './../../assets/images/adresses.png';

const AddressesView = () => {
    return (
        <div className="flex flex-col items-center justify-start h-full bg-white ">
            <img
                className="h-10 w-auto sm:h-24 cursor-pointer "
                src={addresses}
                alt="lock"
            />
            <h3 className="text-primary my-2 sm:my-10">Adresses Enregistrées</h3>
            <Link
                to={URL_ADDRESS_ADD}
                className="rounded-md p-5 border shadow border-black-waya hover:border-PrimaryWaya-light"
            >
                <p className="">Ajouter une nouvelle adresse</p>
            </Link>
            <div className="w-full p-2">
                <Addresses />
            </div>
        </div>
    );
};

export default AddressesView;
