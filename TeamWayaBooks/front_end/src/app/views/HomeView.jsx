import React from 'react';

import TagShowCase from '../components/product/TagShowCase';
import DiscountShowcase from './../components/product/DiscountShowcase';

const HomeView = () => {
    return (
        <div>
            <TagShowCase page={1} limit={8} tag={1} />
            <DiscountShowcase />
        </div>
    );
};

export default HomeView;
