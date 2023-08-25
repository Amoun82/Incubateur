import React from 'react';

import profile from './../../assets/images/profile.png';
import EditProfile from './../../components/account/EditProfile';

function EditProfileView() {
    return (
        <div className="bg-white flex justify-center font-Montserrat mb-12">
            <div className="flex flex-col items-center mt-12">
                <img className="w-1/4" src={profile} alt="profile" />
                <h1 className="text-2xl text-PrimaryWaya-light drop-shadow-lg mb-12">
                    Modification de compte
                </h1>
                <EditProfile />
            </div>
        </div>
    );
}

export default EditProfileView;
