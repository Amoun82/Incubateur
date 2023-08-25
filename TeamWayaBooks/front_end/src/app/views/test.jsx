import React from 'react';

import CategoryProduct from '../shared/components/utils-components/CategoryProduct';

const test = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="mb-10">page test</h1>

            <CategoryProduct id={16} />
        </div>
    );
};

export default test;
