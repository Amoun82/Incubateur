import React from 'react';

import CommercialTagAdd from './../../components/commercial/CommercialTagAdd';

const CommercialTagAddView = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-600 items-center mt-2">
            <div className="max-w-xl flex flex-col items-center w-full">
                <div className=" text-lg rounded-md bg-white text-PrimaryWaya-light grow-0 p-1">
                    Nouveau Tag
                </div>
                <div className="w-full bg-white rounded-md mt-2">
                    <CommercialTagAdd />
                </div>
            </div>
        </div>
    );
};

export default CommercialTagAddView;
