import React from 'react';

import lock from './../../assets/images/lock.png';
import ForgottenPassword from './../../components/account/ForgottenPassword';

function ForgottenPasswordView() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-white ">
            <img className="h-10 w-auto sm:h-24 cursor-pointer " src={lock} alt="lock" />
            <h3 className="text-primary my-2 sm:my-10">Oubli de mot de passe</h3>
            <ForgottenPassword className="flex flex-col items-center justify-center" />
        </div>
    );
}

export default ForgottenPasswordView;
