import React from 'react';

import lock from './../../assets/images/lock.png';
import EditPassword from './../../components/account/EditPassword';

const EditPasswordView = () => {
    return (
        <div className="bg-white flex flex-col font-Montserrat items-center mb-32">
            <h1 className="text-4xl text-PrimaryWaya-light mt-16 mb-10">
                Modifier le mot de passe
            </h1>
            <div className="border rounded-lg flex flex-col items-center w-5/6 mx-10">
                <img className="mt-8 mb-8" alt="lock" src={lock} />
                <h2 className="text-xl text-PrimaryWaya-light">
                    Bonjour, merci de faire confiance à notre site. Créez votre nouveau
                    mot de passe
                </h2>
                <EditPassword />
            </div>
        </div>
    );
};

export default EditPasswordView;
