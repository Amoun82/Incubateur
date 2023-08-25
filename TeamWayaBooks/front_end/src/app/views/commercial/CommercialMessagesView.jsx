import React from 'react';

import CommercialMessages from './../../components/commercial/CommercialMessages';

const CommercialMessagesView = () => {
    return (
        <section className="w-full h-full flex bg-gray-600">
            <div className="w-full">
                <CommercialMessages />
            </div>
        </section>
    );
};

export default CommercialMessagesView;
