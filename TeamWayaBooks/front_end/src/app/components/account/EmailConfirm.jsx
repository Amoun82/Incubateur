import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '../../assets/images/logo.png';
import { userEmailConfirm } from './../../api/backend/account';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component EmailConfirm
 *
 *
 * @author Richard A
 */
const EmailConfirm = () => {
    const [token, setToken] = useState('');
    const history = useHistory();
    const validate = () => {
        userEmailConfirm(token)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    toast.success("Votre E-mail vient d'être confirmé.", {
                        position: 'top-center',
                        autoClose: 3000,
                    });
                    history.push(URL_HOME);
                }
            })
            .catch((response) => {
                console.log('first');
                toast.error(
                    'Problème lors de la validation de votre E-mail, ' + response,
                    {
                        position: 'top-center',
                        autoClose: 3000,
                    },
                );
            });
    };
    useEffect(() => {
        setToken(new URLSearchParams(history.location.search).get('token'));
        if (token !== '') {
            validate();
        }
    }, [token]);

    return (
        <div className="bg-white p-4 rounded-md shadow max-w-3xl w-full space-y-2 py-12 px-4 sm:px-6 lg:px-8">
            <div>
                <div className="flex justify-center">
                    <img className="w-auto sm:h-10" src={logo} alt="Wayabooks logo" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
                    Validation de votre adresse E-mail
                </h2>
                <div className="flex justify-center">
                    <button
                        className="btn btn-primary justify-center mt-5"
                        onClick={validate}
                    >
                        Je valide mon Email
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailConfirm;
