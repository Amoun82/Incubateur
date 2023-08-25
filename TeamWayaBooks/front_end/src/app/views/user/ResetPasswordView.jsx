import React from 'react';

import ResetPassword from '../../components/account/ResetPassword';
import lock from './../../assets/images/lock.png';

function ResetPasswordView() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-white">
            <img className="h-10 w-auto sm:h-24 cursor-pointer " src={lock} alt="lock" />
            <h3 className="text-primary my-2 sm:my-10">Oubli de mot de passe</h3>
            <ResetPassword className="flex flex-col items-center justify-center shrink-0" />
        </div>
    );
}

export default ResetPasswordView;
