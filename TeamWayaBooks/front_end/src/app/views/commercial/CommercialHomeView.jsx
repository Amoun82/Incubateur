import React from 'react';

import CommercialDashBoard from './../../components/commercial/CommercialDashBoard';

const CommercialHomeView = () => {
    return (
        <section className="w-full flex h-full bg-white ">
            <div className="w-full">
                <CommercialDashBoard />
            </div>
        </section>
    );
};

export default CommercialHomeView;
