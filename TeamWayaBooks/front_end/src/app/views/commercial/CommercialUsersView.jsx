import React from 'react';

import CommercialUsers from './../../components/commercial/CommercialUsers';

const CommercialUsersView = () => {
    return (
        <div className="w-full h-full flex bg-gray-600">
            <div className="w-full">
                <CommercialUsers />
            </div>
        </div>
    );
};

export default CommercialUsersView;
