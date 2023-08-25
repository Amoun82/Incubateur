import React from 'react';

import DeleteProfile from '../../components/account/DeleteProfile';

const DeleteProfileView = () => {
    return (
        <div className="flex flex-col items-center justify-start h-full bg-white ">
            <h3 className="text-PrimaryWaya-light font-bold my-2 sm:my-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                Suppression de compte
            </h3>
            <DeleteProfile />
        </div>
    );
};

export default DeleteProfileView;
