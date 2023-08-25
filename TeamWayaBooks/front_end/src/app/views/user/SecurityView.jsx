import React from 'react';
import { Link } from 'react-router-dom';

import {
    URL_EDIT_PASSWORD,
    URL_EDIT_PROFILE,
} from '../../shared/constants/urls/urlConstants';
import security from './../../assets/images/security.png';

const SecurityView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-white py-2 md:py-10 rounded-md">
            <img src={security} alt="security" className="w-10" />
            <h3 className="text-primary my-2 sm:my-10">Connexion et sécurité</h3>
            <div className="flex flex-col items-start sm:items-center justify-left sm:justify-center w-10/12  shadow space-y-8 py-12 px-4 sm:px-6 lg:px-8 text-primary font-bold">
                <Link
                    to={URL_EDIT_PROFILE}
                    className="rounded-md border m-0 md:m-5 p-4 md:p-5 w-full md:w-4/5 hover:border-PrimaryWaya-light hover:border-2"
                >
                    <p className="text-center">Modifier mon profil</p>
                </Link>
                <Link
                    to={URL_EDIT_PASSWORD}
                    className="rounded-md border m-0 md:m-5 p-4 md:p-5 w-full md:w-4/5 hover:border-PrimaryWaya-light hover:border-2"
                >
                    <p className="text-center">Modifier mon mot de passe</p>
                </Link>
            </div>
        </div>
    );
};

export default SecurityView;
