import React from 'react';

import Login from './../components/account/Login';

/**
 * View/Page Login
 *
 * @param {object} history
 * @author Peter Mollet
 */
const LoginView = () => {
    return (
        <div className="flex items-center justify-center h-full bg-[url('/src/app/assets/images/street-art_retouchee.png')] bg-cover bg-center h-screen">
            <Login className="" />
        </div>
    );
};

export default LoginView;
