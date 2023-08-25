import React from 'react';

import ManagementAccount from '../../components/account/ManagementAccount';
import profile from './../../assets/images/profile.png';

const ManageAccountView = () => {
    return (
        <div className="bg-white flex justify-center font-Montserrat mb-2">
            <div className="flex flex-col items-center mt-12 p-10">
                <img className="w-1/4 md:w-1/12" src={profile} alt="profile" />
                <h1 className="text-2xl text-PrimaryWaya-light drop-shadow-lg mb-12">
                    Mon compte
                </h1>
                <ManagementAccount />
            </div>
        </div>
    );
};

export default ManageAccountView;
